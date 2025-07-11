import { Student } from "../../types/student";


let students: Student[] = [];

export function readData(): Student[] {
    return students;
}

export function writeData(updated: Student[]) {
    students = updated;
}
