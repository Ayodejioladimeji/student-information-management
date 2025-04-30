import { NextResponse } from 'next/server';
import { addStudent, getStudents } from '@/lib/data';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    return NextResponse.json(getStudents());
}

export async function POST(req: Request) {
    const data = await req.json()

    const newStudent = {
        ...data,
        id: uuidv4(),
        gpa: parseFloat(data.gpa),
    }

    addStudent(newStudent)
    return NextResponse.json({ message: 'successful' }, { status: 201 })
}