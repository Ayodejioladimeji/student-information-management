import {
    getStudentById,
    updateStudent,
    deleteStudent,
} from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const student = getStudentById(params.id);
    if (!student) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(student);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const data = await req.json();
    updateStudent(params.id, data);
    return NextResponse.json({ message: 'Student updated' });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    deleteStudent(params.id);
    return NextResponse.json({ message: 'Student deleted' });
}
