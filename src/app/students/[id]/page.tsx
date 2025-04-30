import { notFound } from 'next/navigation';
import { Student } from '@/lib/data';
import StudentDetail from '@/components/student-detail';

async function getStudent(id: string): Promise<Student | null> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
}

export default async function StudentDetailPage({ params }: { params: { id: string } }) {
    const student = await getStudent(params.id);
    if (!student) return notFound();

    return <StudentDetail student={student} />;
}
