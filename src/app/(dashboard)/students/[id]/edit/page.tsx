'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import cogoToast from '@successtar/cogo-toast';
import { ArrowLeft, Save, X } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Enter a valid email'),
    regNo: z.string().min(1, 'Registration number is required'),
    major: z.string().min(1, 'Major is required'),
    dob: z.string().min(1, 'Date of birth is required'),
    gpa: z.string().refine(val => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 4, {
        message: 'GPA must be between 0 and 4',
    }),
});

type FormData = z.infer<typeof formSchema>;

const majors = ['Computer Science', 'Business Admin', 'Mathematics', 'Psychology', 'Law'];

export default function EditStudentPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const validation = formSchema.safeParse(data);
        if (!validation.success) {
            const fieldErrors: Partial<Record<keyof FormData, string>> = {};
            validation.error.errors.forEach((err) => {
                const field = err.path[0] as keyof FormData;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        try {
            setLoading(true);
            const res = await fetch('/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(validation.data),
            });

            if (!res.ok) throw new Error('Failed to add student');
            cogoToast.success('Student added successfully!');
            router.push('/dashboard');
        } catch {
            cogoToast.error('Error adding student. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white text-gray-900 px-6 py-10 min-h-screen">
            <h1 className="font-bold text-2xl flex items-center gap-3 mb-20">
                <button
                    type="button"
                    className="cursor-pointer rounded-full w-8 h-8 bg-gray-200 flex items-center justify-center"
                    onClick={() => router.back()}
                >
                    <ArrowLeft size={18} />
                </button>
                Edit Student Information
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        {...register('name')}
                        className="w-full p-3 rounded border border-gray-300"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        {...register('email')}
                        className="w-full p-3 rounded border border-gray-300"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Reg No */}
                <div>
                    <label className="block mb-1 font-medium">
                        Registration Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        {...register('regNo')}
                        className="w-full p-3 rounded border border-gray-300"
                    />
                    {errors.regNo && <p className="text-red-500 text-sm mt-1">{errors.regNo}</p>}
                </div>

                {/* Major */}
                <div>
                    <label className="block mb-1 font-medium">
                        Major <span className="text-red-500">*</span>
                    </label>
                    <select
                        {...register('major')}
                        className="w-full p-3 rounded border border-gray-300 bg-white"
                    >
                        <option value="">Select a major</option>
                        {majors.map((major, i) => (
                            <option key={i} value={major}>
                                {major}
                            </option>
                        ))}
                    </select>
                    {errors.major && <p className="text-red-500 text-sm mt-1">{errors.major}</p>}
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block mb-1 font-medium">
                        Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        {...register('dob')}
                        className="w-full p-3 rounded border border-gray-300"
                    />
                    {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                </div>

                {/* GPA */}
                <div>
                    <label className="block mb-1 font-medium">
                        GPA <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        {...register('gpa')}
                        className="w-full p-3 rounded border border-gray-300"
                    />
                    {errors.gpa && <p className="text-red-500 text-sm mt-1">{errors.gpa}</p>}
                </div>

                <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-gray-800 text-white rounded px-5 py-3 text-sm flex items-center gap-2 hover:bg-red-500 transition cursor-pointer"
                    >
                        <Save size={16} /> {loading ? 'Updating...' : 'Update Student'}
                    </button>
                </div>
            </form>
        </div>
    );
}
