import { NextResponse } from 'next/server';
import { addStudent, getStudents } from '@/lib/data';

export async function GET() {
    return NextResponse.json(getStudents());
}

export async function POST(req: Request) {
    const data = await req.json();
    addStudent(data);
    return NextResponse.json({ message: 'Student added' }, { status: 201 });
}
