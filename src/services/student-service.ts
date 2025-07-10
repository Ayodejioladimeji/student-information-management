export async function getAllStudents() {
    try {
        const res = await fetch('/api/students');
        if (!res.ok) throw new Error(`Failed to fetch students: ${res.statusText}`);
        return await res.json();
    } catch (error) {
        console.error('getAllStudents error:', error);
        return null;
    }
}

export async function getStudentById(id: string) {
    try {
        const res = await fetch(`/api/students/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch student ${id}: ${res.statusText}`);
        return await res.json();
    } catch (error) {
        console.error('getStudentById error:', error);
        return null;
    }
}

export async function createStudent(student: any) {
    try {
        const res = await fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        if (!res.ok) throw new Error(`Failed to create student: ${res.statusText}`);
        return await res.json();
    } catch (error) {
        console.error('createStudent error:', error);
        return null;
    }
}

export async function updateStudent(id: string, student: any) {
    try {
        const res = await fetch(`/api/students/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        if (!res.ok) throw new Error(`Failed to update student ${id}: ${res.statusText}`);
        return await res.json();
    } catch (error) {
        console.error('updateStudent error:', error);
        return null;
    }
}

export async function deleteStudent(id: string) {
    try {
        const res = await fetch(`/api/students/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error(`Failed to delete student ${id}: ${res.statusText}`);
        return await res.json();
    } catch (error) {
        console.error('deleteStudent error:', error);
        return null;
    }
}
  