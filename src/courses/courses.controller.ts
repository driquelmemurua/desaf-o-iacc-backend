import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseExistsPipe } from './pipes/course-exists.pipe';
import { EmptyBodyPipe } from 'src/pipes/empty-body.pipe';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', CourseExistsPipe) id: number) {
        return this.coursesService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreateCourseDto) {
        return this.coursesService.create(dto);
    }

    @Patch(':id')
    update(@Param('id', CourseExistsPipe) id: number, @Body(EmptyBodyPipe) dto: UpdateCourseDto) {
        return this.coursesService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id', CourseExistsPipe) id: number) {
        return this.coursesService.delete(id);
    }
}
