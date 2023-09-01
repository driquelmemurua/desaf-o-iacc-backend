import { IsEnum, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { Semester } from "src/constants/semester";

export class UpdateCourseDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    code?: string;

    @IsOptional()
    @IsNumber()
    @Min(2020)
    @Max(2030)
    year?: number;

    @IsOptional()
    @IsEnum(Semester)
    semester?: Semester;

    @IsOptional()
    @IsString()
    campus?: string;
}
