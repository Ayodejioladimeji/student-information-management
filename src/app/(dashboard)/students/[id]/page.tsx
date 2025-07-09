"use client";

import DeleteStudentModal from "@/components/layout/modals/delete-students-modal";
import { ArrowLeft, Pencil, Trash2, Calendar, Mail, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StudentDetails() {
    const router = useRouter()
    const [deleteModal, setDeleteModal] = useState(false)

    const student = {
        name: "First user",
        email: "user@mailinator.com",
        regNo: "4756565",
        major: "Mathematics",
        gpa: 2.5,
        dob: "7/12/2025",
        courses: 0,
    };

    // 

    return (
        <div className="min-h-screen px-6 py-8">
            <div className="mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="cursor-pointer rounded-full w-8 h-8 bg-gray-200 flex items-center justify-center"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <h2 className="text-lg md:text-2xl font-semibold text-gray-900">Student Details</h2>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => router.push("/students/1234/edit")}
                            className="flex items-center gap-1 px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm cursor-pointer">
                            <Pencil className="w-4 h-4" />
                            Edit
                        </button>

                        <button
                            onClick={() => setDeleteModal(true)}
                            className="flex items-center gap-1 px-3 py-2 rounded border border-red-500 bg-red-50 text-red-600 hover:bg-red-100 text-sm cursor-pointer">
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </button>
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-lg border border-gray-300 p-4 md:p-6">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="flex-shrink-0 h-20 w-20 rounded-lg bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
                            {student.name
                                .split(" ")
                                .map(word => word[0]?.toUpperCase())
                                .join("")}
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>

                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Mail className="w-4 h-4" />
                                {student.email}
                            </div>
                        </div>
                    </div>

                    <table className="w-full max-w-[500px] text-sm text-left text-gray-800 border border-gray-200 rounded-lg overflow-hidden">
                        <tbody className="divide-y divide-gray-200 bg-white">
                            <tr>
                                <th className="p-2 font-medium text-gray-700 bg-gray-50 w-1/3">Registration Number</th>
                                <td className="p-2">{student.regNo}</td>
                            </tr>
                            <tr>
                                <th className="p-2 font-medium text-gray-700 bg-gray-50">Date of Birth</th>
                                <td className="p-2 flex items-center gap-1">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    {student.dob}
                                </td>
                            </tr>
                            <tr>
                                <th className="p-2 font-medium text-gray-700 bg-gray-50">Major</th>
                                <td className="p-2">{student.major}</td>
                            </tr>
                            <tr>
                                <th className="p-2 font-medium text-gray-700 bg-gray-50">GPA</th>
                                <td className="p-2">
                                    <span
                                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${student.gpa < 2
                                            ? "bg-yellow-100 text-yellow-800"
                                            : "bg-amber-100 text-amber-800"}`}
                                    >
                                        {student.gpa.toFixed(1)}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            {/* Delete user information confirmation modal */}
            {deleteModal &&
                <DeleteStudentModal
                    studentName="tolani"
                    deleteModal={deleteModal}
                    setDeleteModal={setDeleteModal}
                />}
        </div>
    );
}
