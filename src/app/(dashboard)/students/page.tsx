'use client';

import { Eye, Pencil, Search } from 'lucide-react';
import Link from 'next/link';

export default function Students() {
    return (
        <div className="min-h-screen px-6 py-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">All Students</h1>
                </div>

                <Link href="/students/new" className="border border-gray-300 border border-gray-300-white px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition">
                    Add Student
                </Link>
            </div>


            {/* Recent Students Section */}
            <div className="border border-gray-300 rounded-lg space-y-4">
                {/* Search Input */}
                <div className="relative m-6">
                    <input
                        type="text"
                        placeholder="Search students..."
                        className="w-full border border-gray-300 border border-gray-300-gray-600 rounded px-10 py-2 text-gray-800 placeholder-gray-400 focus:outline-none max-w-[300px]"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5" />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-800">
                        <thead>
                            <tr className="border-b border-t border-gray-300">
                                <th className="p-3">Name</th>
                                <th className="p-3">Reg No</th>
                                <th className="p-3">Major</th>
                                <th className="p-3">GPA</th>
                                <th className="p-3">Courses</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {[
                                {
                                    name: "User1",
                                    email: "user@mailinator.com",
                                    regNo: "324324334",
                                    major: "Psychology",
                                    gpa: 0.6,
                                    courses: 0,
                                },
                                {
                                    name: "user2",
                                    email: "user@mailinator.com",
                                    regNo: "324343",
                                    major: "Engineering",
                                    gpa: 0.6,
                                    courses: 0,
                                },
                                {
                                    name: "user3",
                                    email: "user@mailinator.com",
                                    regNo: "4756565",
                                    major: "Biology",
                                    gpa: 4.0,
                                    courses: 0,
                                },
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="flex items-center gap-3 p-3">
                                        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-gray-600 font-bold 
                                        ${student.gpa < 2
                                                ? 'bg-red-100 text-red-800' : student.gpa < 3 ? "bg-yellow-100 text-yellow-800"
                                                    : 'bg-green-100 text-green-800'
                                            }
                                        `}>
                                            {student.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">{student.name}</span>
                                            <span className="text-sm text-gray-500">{student.email}</span>
                                        </div>
                                    </td>
                                    <td className="p-3 text-gray-800">{student.regNo}</td>
                                    <td className="p-3 text-gray-800">{student.major}</td>
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${student.gpa < 2
                                                ? 'bg-red-100 text-red-800' : student.gpa < 3 ? "bg-yellow-100 text-yellow-800"
                                                    : 'bg-green-100 text-green-800'
                                                }`}
                                        >
                                            {student.gpa.toFixed(1)}
                                        </span>
                                    </td>
                                    <td className="p-3 text-gray-800">{student.courses} courses</td>
                                    <td className="p-3 flex gap-2">
                                        <button className="flex items-center gap-1 px-3 py-1 rounded border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                            <Eye className="w-3 h-3" />
                                            View
                                        </button>
                                        <button className="flex items-center gap-1 px-3 py-1 rounded border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                            <Pencil className="w-3 h-3" />
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={6} className="py-6 text-center text-gray-500">
                                    No students data available
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center text-sm pt-4">
                    
                </div>
            </div>
        </div>
    );
}
