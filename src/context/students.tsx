'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Student } from '@/lib/data'

type StudentContextType = {
    students: Student[]
    fetchStudents: () => void
    addStudent: (student: Omit<Student, 'id'>) => Promise<void>
    updateStudent: (id: string, updated: Partial<Student>) => Promise<void>
    deleteStudent: (id: string) => Promise<void>
    loading:boolean
}

const StudentContext = createContext<StudentContextType | undefined>(undefined)

export const StudentProvider = ({ children }: { children: React.ReactNode }) => {
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)

    const fetchStudents = async () => {
        const res = await fetch('/api/students')
        const data = await res.json()
        setStudents(data)
        setLoading(false)
    }

    const addStudent = async (student: Omit<Student, 'id'>) => {
        const res = await fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        })
        if (res.ok) fetchStudents()
    }

    const updateStudent = async (id: string, updated: Partial<Student>) => {
        const res = await fetch(`/api/students/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated),
        })
        if (res.ok) fetchStudents()
    }

    const deleteStudent = async (id: string) => {
        const res = await fetch(`/api/students/${id}`, { method: 'DELETE' })
        if (res.ok) fetchStudents()
    }

    useEffect(() => {
        fetchStudents()
    }, [])

    return (
        <StudentContext.Provider value={{ students, loading, fetchStudents, addStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    )
}

export const useStudents = () => {
    const context = useContext(StudentContext)
    if (!context) throw new Error('useStudents must be used within a StudentProvider')
    return context
}
