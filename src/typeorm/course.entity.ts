import { Semester } from "src/constants/semester";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    year: number;

    @Column('int2')
    semester: Semester;

    @Column()
    campus: string;
}