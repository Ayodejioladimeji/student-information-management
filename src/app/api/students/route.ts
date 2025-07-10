// app/api/students/route.ts
import { NextResponse } from 'next/server';
import { readData, writeData } from '@/utils';

export async function GET() {
    const students = readData();
    return NextResponse.json(students);
}

export async function POST(req: Request) {
    const body = await req.json();
    const students = readData();

    const newStudent = {
        id: Date.now().toString(),
        ...body,
    };

    students.unshift(newStudent);
    writeData(students);

    return NextResponse.json(newStudent, { status: 201 });
}
