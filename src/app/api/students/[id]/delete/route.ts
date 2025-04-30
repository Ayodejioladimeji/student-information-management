import { deleteStudent } from '@/lib/data';

export async function POST(_: Request, { params }: { params: { id: string } }) {
    deleteStudent(params.id);
}
