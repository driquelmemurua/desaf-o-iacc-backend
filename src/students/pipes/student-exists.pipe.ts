import { Repository } from "typeorm";
import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "src/typeorm";

@Injectable()
export class StudentExistsPipe implements PipeTransform {
    constructor(
        @InjectRepository(Student)
        private readonly studentsRepository: Repository<Student>
    ) {}

    async transform(id: number) {
        const student = await this.studentsRepository.findOneBy({ id });
        if (!student) 
            throw new NotFoundException(`Student with id ${id} not found.`);
        
        return id;
    }
}