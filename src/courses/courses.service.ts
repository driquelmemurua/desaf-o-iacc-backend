import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/typeorm/course.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly coursesRepository: Repository<Course>,
    ) {}

    findAll(): Promise<Course[]> {
        return this.coursesRepository.find();
    }

    findOne(id: number): Promise<Course | null> {
        return this.coursesRepository.findOneBy({ id });
    }

    create(dto: CreateCourseDto): Promise<Course> {
        return this.coursesRepository.save(dto);
    }

    update(id: number, dto: UpdateCourseDto): Promise<UpdateResult> {
        return this.coursesRepository.update(id, dto);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.coursesRepository.delete(id);
    }
}
