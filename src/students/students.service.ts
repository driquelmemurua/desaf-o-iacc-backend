import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentsRepository: Repository<Student>,
    ) {}

    findAll(): Promise<Student[]> {
        return this.studentsRepository.find();
    }

    findOne(id: number): Promise<Student | null> {
        return this.studentsRepository.findOneBy({ id });
    }

    create(dto: CreateStudentDto): Promise<Student> {
        return this.studentsRepository.save(dto);
    }

    update(id: number, dto: UpdateStudentDto): Promise<UpdateResult> {
        return this.studentsRepository.update(id, dto);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.studentsRepository.delete(id);
    }
}
