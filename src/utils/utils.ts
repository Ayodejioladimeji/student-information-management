import { Student } from "../../types/student";


export function calculateAverageCGPA(students: Student[]): number {
    if (!students.length) return 0;

    const totalGPA = students.reduce((sum, student) => sum + student.gpa, 0);
    const average = totalGPA / students.length;

    return parseFloat(average.toFixed(2)); 
}
