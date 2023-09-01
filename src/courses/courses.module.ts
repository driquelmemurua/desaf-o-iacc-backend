import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/typeorm/course.entity';
import { StudentsModule } from 'src/students/students.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), StudentsModule],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
