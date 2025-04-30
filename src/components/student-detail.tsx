'use client';


import { useRouter } from 'next/navigation';
import { Box, Button, Heading, Table, Wrap } from '@chakra-ui/react';
import { Delete } from './delete-student-dialog';

type Student = {
    id: string;
    name: string;
    registrationNumber: string;
    major: string;
    dob: string;
    gpa: number;
};

export default function StudentDetail({ student }: { student: Student }) {
    const router = useRouter();
    const id = student.id

    return (
        <Box p={8} maxW="4xl" mx="auto">
            <Heading mb={4}>{student.name}</Heading>

            <div className="overflow-x-auto mb-6 bg-red-400">
                <Table.Root size="sm">
                    <Table.Body>
                            <Table.Row>
                            <Table.ColumnHeader>Registration Number</Table.ColumnHeader>
                                <Table.Cell>{student.registrationNumber}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.ColumnHeader>Major</Table.ColumnHeader>
                                <Table.Cell>{student.major}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.ColumnHeader>Date Of Birth</Table.ColumnHeader>
                                <Table.Cell>{student.dob}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.ColumnHeader>GPA</Table.ColumnHeader>
                                <Table.Cell>{student.gpa}</Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table.Root>
            </div>

            <Wrap marginTop={10}>
                <Button
                    onClick={() => router.push(`/students/${student.id}/edit`)}
                    variant="outline" size="md"
                    background="white"
                    className="flex items-center gap-3"
                    color="black"
                >
                    Edit
                </Button>

                <Delete id={id} />
            </Wrap>
        </Box>
    );
}
