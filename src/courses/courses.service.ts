import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/typeorm/course.entity';
import { Student } from 'src/typeorm';
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
        return this.coursesRepository.findOne({
            where: { id },
            relations: ['students'],
        });
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

    async enrollStudent(course: Course, student: Student) {
        const courseHasStudent = course.students.filter((courseStudent) => courseStudent.id === student.id).length > 0;
        if (courseHasStudent)
            throw new BadRequestException(`Course with id ${course.id} already has enrolled student with id ${student.id}`);

        course.students = [...course.students, student];

        return await this.coursesRepository.save(course);
    }
}
