'use client'

import { useState } from 'react'
import { Box, Button, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react'
import Loading from '@/components/ui/loading'
import cogoToast from '@successtar/cogo-toast'
import { useRouter } from 'next/navigation'
import { useStudents } from '@/context/students'
import { z } from 'zod'

// Define the schema using Zod
const studentSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    registrationNumber: z.string().min(1, 'Registration Number is required'),
    major: z.string().min(1, 'Major is required'),
    dob: z.string().refine(
        (date) => !isNaN(Date.parse(date)),
        { message: 'Date of birth must be a valid date' }
    ),
    gpa: z.preprocess(
        (val) => parseFloat(String(val)),
        z.number().min(0, 'GPA must be at least 0.0').max(4.0, 'GPA must not exceed 4.0')
    ),
})

type StudentFormData = z.infer<typeof studentSchema>

const AddStudent = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        registrationNumber: '',
        major: '',
        dob: '',
        gpa: '',
    })
    const [errors, setErrors] = useState<Partial<Record<keyof StudentFormData, string>>>({})
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { addStudent } = useStudents()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setStudentData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Validate input
            const validatedData = studentSchema.parse(studentData)

            await addStudent(validatedData)
            cogoToast.success('Student added successfully')
            router.push('/students')

        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors: Partial<Record<keyof StudentFormData, string>> = {}
                error.errors.forEach((err) => {
                    const field = err.path[0] as keyof StudentFormData
                    fieldErrors[field] = err.message
                })
                setErrors(fieldErrors)
            } else {
                console.error(error)
                cogoToast.error('An unexpected error occurred.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box p={8} maxW="4xl" mx="auto">
            <Flex align="center" justify="space-between" mb={10}>
                <Heading fontSize="2xl">Add New Student</Heading>
                <Button
                    onClick={() => router.push(`/students`)}
                    variant="outline"
                    size="md"
                    bg="white"
                    className="flex items-center gap-3"
                    color="black"
                >
                    All Students
                </Button>
            </Flex>

            <form onSubmit={handleSubmit}>
                <Stack>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Input id="name" name="name" type="text" value={studentData.name} onChange={handleInputChange} />
                        {errors.name && <Text color="red" fontSize={12}>{errors.name}</Text>}
                    </div>

                    <div>
                        <label htmlFor="registrationNumber">Registration Number</label>
                        <Input
                            id="registrationNumber"
                            name="registrationNumber"
                            type="text"
                            value={studentData.registrationNumber}
                            onChange={handleInputChange}
                        />
                        {errors.registrationNumber && <Text color="red" fontSize={12}>{errors.registrationNumber}</Text>}
                    </div>

                    <div>
                        <label htmlFor="major">Major</label>
                        <Input id="major" name="major" type="text" value={studentData.major} onChange={handleInputChange} />
                        {errors.major && <Text color="red" fontSize={12}>{errors.major}</Text>}
                    </div>

                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <Input id="dob" name="dob" type="date" value={studentData.dob} onChange={handleInputChange} />
                        {errors.dob && <Text color="red" fontSize={12}>{errors.dob}</Text>}
                    </div>

                    <div>
                        <label htmlFor="gpa">GPA</label>
                        <Input
                            id="gpa"
                            name="gpa"
                            type="number"
                            step="0.01"
                            value={studentData.gpa}
                            onChange={handleInputChange}
                        />
                        {errors.gpa && <Text color="red" fontSize={12}>{errors.gpa}</Text>}
                    </div>

                    <Button
                        disabled={loading}
                        colorScheme="blue"
                        background="blue"
                        color="white"
                        fontWeight="bold"
                        padding={6}
                        marginTop={5}
                        type="submit"
                    >
                        Add Student {loading && <Loading />}
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default AddStudent
