import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentExistsPipe } from './pipes/student-exists.pipe';
import { CreateStudentDto } from './dto/create-student.dto';
import { EmptyBodyPipe } from 'src/pipes/empty-body.pipe';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', StudentExistsPipe) id: number) {
        return this.studentsService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreateStudentDto) {
        return this.studentsService.create(dto);
    }

    @Patch(':id')
    update(@Param('id', StudentExistsPipe) id: number, @Body(EmptyBodyPipe) dto: UpdateStudentDto) {
        return this.studentsService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id', StudentExistsPipe) id: number) {
        return this.studentsService.delete(id);
    }
}
