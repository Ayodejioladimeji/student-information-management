
export async function getAllStudents() {
    const res = await fetch('/api/students');
    return res.json();
}

export async function getStudentById(id: string) {
    const res = await fetch(`/api/students/${id}`);
    return res.json();
}

export async function createStudent(student: any) {
    const res = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
    });
    return res.json();
}

export async function updateStudent(id: string, student: any) {
    const res = await fetch(`/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
    });
    return res.json();
}

export async function deleteStudent(id: string) {
    const res = await fetch(`/api/students/${id}`, { method: 'DELETE' });
    return res.json();
}
  