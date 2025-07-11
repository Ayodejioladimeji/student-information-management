import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/students-store';
import { Student } from '../../../../types/student';


export async function GET() {
    const students = readData();
    return NextResponse.json(students);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const students = readData();

    const newStudent: Student = {
        id: Date.now().toString(),
        ...body,
    };

    const updatedStudents = [newStudent, ...students]; 

    writeData(updatedStudents); 

    return NextResponse.json(newStudent, { status: 201 });
}
  