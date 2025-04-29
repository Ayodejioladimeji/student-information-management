export type Student = {
    id: string;
    name: string;
    registrationNumber: string;
    major: string;
    dob: string;
    gpa: number;
};

let students: Student[] = [
    {
        id: '1',
        name: 'John Doe',
        registrationNumber: '202401234',
        major: 'Computer Science',
        dob: '2001-05-05',
        gpa: 3.8,
    },
    {
        id: '2',
        name: 'Jane Smith',
        registrationNumber: '202401245',
        major: 'Mechanical Engineering',
        dob: '2002-05-21',
        gpa: 3.6,
    },
];

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
