export type Student = {
    id: string;
    name: string;
    registrationNumber: string;
    major: string;
    dob: string;
    gpa: number;
};

let students: Student[] = [];

export const getStudents = () => students;

export const getStudentById = (id: string) =>
    students.find((student) => student.id === id);

export const addStudent = (student: Student) => {
    students.push(student);
};

export const updateStudent = (id: string, updated: Partial<Student>) => {
    students = students.map((student) =>
        student.id === id ? { ...student, ...updated } : student
    );
};

export const deleteStudent = (id: string) => {
    students = students.filter((student) => student.id !== id);
};
