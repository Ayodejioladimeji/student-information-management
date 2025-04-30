"use client"
import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    Flex,
    Input,
} from '@chakra-ui/react';
import Link from 'next/link';
import {  useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/loading';
import { useStudents } from '@/context/students';

export default function StudentsPage() {
    const { students, loading } = useStudents()
    const router = useRouter();
    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.registrationNumber.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="min-h-screen">
            <Box p={8} maxW="4xl" mx="auto">
                <Flex align="center" justify="space-between" mb={10}>
                    <Heading fontSize="2xl">Student List</Heading>
                    <Button
                        onClick={() => router.push(`/students/new`)}
                        variant="outline"
                        size="md"
                        bg="white"
                        className="flex items-center gap-3"
                        color="black"
                    >
                        Add New Student
                    </Button>
                </Flex>

                <Box mb={6}>
                    <Input
                        placeholder="Search by name or registration number"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-white"
                    />
                </Box>

                <VStack align="stretch">
                    {loading && (
                        <Flex align="center" justify="center" mb={10} mt={10}>
                            <Loading black height='45px' width='45px' />
                        </Flex>
                    )}

                    {filteredStudents.map((student) => (
                        <Link href={`/students/${student.id}`} passHref key={student.id}>
                            <Box
                                p={4}
                                borderWidth="1px"
                                rounded="md"
                                className="hover:bg-gray-50 transition-all"
                            >
                                <Heading mb={2} fontSize="xl">
                                    {student.name}
                                </Heading>
                                <Text>Registration Number: {student.registrationNumber}</Text>
                                <Text>Major: {student.major}</Text>
                                <Text>Date of Birth: {student.dob}</Text>
                                <Text>GPA: {student.gpa}</Text>
                            </Box>
                        </Link>
                    ))}

                    {!loading && filteredStudents.length === 0 && (
                        <Text className="text-center text-gray-500 mt-6">No matching students found.</Text>
                    )}
                </VStack>
            </Box>
        </section>
    );
}
