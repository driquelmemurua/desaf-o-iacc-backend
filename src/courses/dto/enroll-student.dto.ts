import { IsDefined, IsNumber } from "class-validator";

export class EnrollStudentDto {
    @IsDefined()
    @IsNumber()
    studentId: number;
}
