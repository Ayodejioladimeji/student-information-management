// app/api/students/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/utils';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    const students = readData();
    const student = students.find((s: any) => s.id === params.id);

    if (!student) return NextResponse.json({ message: 'Not found' }, { status: 404 });

    return NextResponse.json(student);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const body = await req.json();
    const students = readData();
    const index = students.findIndex((s: any) => s.id === params.id);

    if (index === -1) return NextResponse.json({ message: 'Not found' }, { status: 404 });

    students[index] = { ...students[index], ...body };
    writeData(students);

    return NextResponse.json(students[index]);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    const students = readData();
    const index = students.findIndex((s: any) => s.id === params.id);

    if (index === -1) return NextResponse.json({ message: 'Not found' }, { status: 404 });

    const deleted = students.splice(index, 1)[0];
    writeData(students);

    return NextResponse.json(deleted);
}
