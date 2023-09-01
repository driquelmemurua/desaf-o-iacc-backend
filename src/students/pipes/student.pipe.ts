import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { StudentsService } from "../students.service";

@Injectable()
export class StudentPipe implements PipeTransform {
    constructor(
        private readonly studentsService: StudentsService,
    ) {}

    async transform(id: number) {
        const student = await this.studentsService.findOne(id);
        if (!student) 
            throw new NotFoundException(`Student with id ${id} not found.`);
        
        return student;
    }
}