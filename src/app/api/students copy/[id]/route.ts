import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/utils';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const students = readData();
    const student = students.find((s: any) => s.id === id);

    if (!student) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(student);
}

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await req.json();

    const students = readData();
    const index = students.findIndex((s: any) => s.id === id);

    if (index === -1) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    students[index] = { ...students[index], ...body };
    writeData(students);

    return NextResponse.json(students[index]);
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const students = readData();
    const index = students.findIndex((s: any) => s.id === id);

    if (index === -1) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    const deleted = students.splice(index, 1)[0];
    writeData(students);

    return NextResponse.json(deleted);
}
