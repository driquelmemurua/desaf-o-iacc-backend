import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Semester } from "src/constants/semester";
import { Student } from "./student.entity";

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

    @ManyToMany(() => Student)
    @JoinTable()
    students: Student[];
}