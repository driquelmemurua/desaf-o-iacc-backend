import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursePipe } from './pipes/course.pipe';
import { EmptyBodyPipe } from 'src/pipes/empty-body.pipe';
import { EnrollStudentDto } from './dto/enroll-student.dto';
import { Course } from 'src/typeorm/course.entity';
import { StudentPipe } from 'src/students/pipes/student.pipe';
import { Student } from 'src/typeorm';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', CoursePipe) course: Course) {
        return course;
    }

    @Post()
    create(@Body() dto: CreateCourseDto) {
        return this.coursesService.create(dto);
    }

    @Patch(':id')
    update(
        @Param('id', CoursePipe) { id }: Course,
        @Body(EmptyBodyPipe) dto: UpdateCourseDto,
    ) {
        return this.coursesService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id', CoursePipe) { id }: Course) {
        return this.coursesService.delete(id);
    }

    @Post(':courseId/students')
    enrollStudent(
        @Param('courseId', CoursePipe) course: Course,
        @Body() _dto: EnrollStudentDto,
        @Body('studentId', StudentPipe) student: Student,
    ) {
        return this.coursesService.enrollStudent(course, student);
    }
}
