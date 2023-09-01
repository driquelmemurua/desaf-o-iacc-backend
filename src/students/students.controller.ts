import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { EmptyBodyPipe } from 'src/pipes/empty-body.pipe';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './students.service';
import { StudentPipe } from './pipes/student.pipe';
import { Student } from 'src/typeorm';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', StudentPipe) student: Student) {
        return student;
    }

    @Post()
    create(@Body() dto: CreateStudentDto) {
        return this.studentsService.create(dto);
    }

    @Patch(':id')
    update(
        @Param('id', StudentPipe) { id }: Student,
        @Body(EmptyBodyPipe) dto: UpdateStudentDto,
    ) {
        return this.studentsService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id', StudentPipe) { id }: Student) {
        return this.studentsService.delete(id);
    }
}
