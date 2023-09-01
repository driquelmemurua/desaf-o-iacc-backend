import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "src/typeorm/course.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourseExistsPipe implements PipeTransform {
    constructor(
        @InjectRepository(Course)
        private readonly coursesRepository: Repository<Course>
    ) {}

    async transform(id: number) {
        const course = await this.coursesRepository.findOneBy({ id });
        if (!course) 
            throw new NotFoundException(`Course with id ${id} not found.`);
        
        return id;
    }
}