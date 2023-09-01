import { IsEmail, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateStudentDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumber()
    @Min(18)
    @Max(99)
    age: number;

    @IsOptional()
    @IsString()
    address: string;
}
