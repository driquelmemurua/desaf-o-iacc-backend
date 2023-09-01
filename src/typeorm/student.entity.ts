import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @ManyToMany(() => Course, (course) => course.students)
    courses: Course[];
}