import { IsDefined, IsEnum, IsNumber, IsString, Max, Min } from "class-validator";
import { Semester } from "src/constants/semester";

export class CreateCourseDto {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    code: string;

    @IsDefined()
    @IsNumber()
    @Min(2020)
    @Max(2030)
    year: number;

    @IsDefined()
    @IsEnum(Semester)
    semester: Semester;

    @IsDefined()
    @IsString()
    campus: string;
}
