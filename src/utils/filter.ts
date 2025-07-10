import { Student } from "../../types/student";

export const filterStudents = (students: Student[], searchTerm: string): Student[] => {
    const term = searchTerm.toLowerCase();
    return students.filter((student) =>
        student.name.toLowerCase().includes(term) ||
        student.email?.toLowerCase().includes(term) ||
        student.registrationNumber.toLowerCase().includes(term) ||
        student.major.toLowerCase().includes(term)
    );
};