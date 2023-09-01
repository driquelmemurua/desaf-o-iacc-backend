import { IsDefined, IsEmail, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateStudentDto {
    @IsDefined()
    @IsString()
    firstName: string;

    @IsDefined()
    @IsString()
    lastName: string;

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @IsNumber()
    @Min(18)
    @Max(99)
    age: number;

    @IsDefined()
    @IsString()
    address: string;
}
