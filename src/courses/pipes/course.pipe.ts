import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { CoursesService } from "../courses.service";

@Injectable()
export class CoursePipe implements PipeTransform {
    constructor(
        private readonly coursesService: CoursesService,
    ) {}

    async transform(id: number) {
        const course = await this.coursesService.findOne(id);
        if (!course) 
            throw new NotFoundException(`Course with id ${id} not found.`);
        
        return course;
    }
}