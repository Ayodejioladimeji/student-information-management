import { deleteStudent } from '@/lib/data';

export async function POST(req: Request, { params }: { params: { id: string } }) {
    deleteStudent(params.id);
}
