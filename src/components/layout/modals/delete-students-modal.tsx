import { deleteStudent } from "@/services/student-service"
import cogoToast from "@successtar/cogo-toast"
import { useParams, useRouter } from "next/navigation"
import React, { Dispatch, SetStateAction, useState } from "react"

interface DeleteProps {
    studentName: string,
    deleteModal:boolean,
    setDeleteModal:Dispatch<SetStateAction<boolean>>
}

const DeleteStudentModal = ({studentName, setDeleteModal}: DeleteProps) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const {id} = useParams()
    const router = useRouter()


    const handleDelete = async () => {
        setIsDeleting(true)
        const res = await deleteStudent(id as string)
        if(res){
            cogoToast.success("Data deleted successfully")
            router.push("/students")
            setDeleteModal(false)
        }
    }

    // 

    return(
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50' onClick={() => setDeleteModal(false)}>
            <div className='bg-white rounded-xl p-6 max-w-md w-full'>
                <h3 className='text-xl font-bold mb-4'>Delete Student</h3>
                <p className='mb-6'>
                    Are you sure you want to delete {studentName}? This action cannot
                    be undone.
                </p>
                <div className='flex justify-end gap-3'>
                    <button
                        onClick={() => setDeleteModal(false)}
                        className='px-4 py-2 border border-gray-700 rounded-md transition-colors cursor-pointer'
                        disabled={isDeleting}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-2 cursor-pointer'
                        disabled={isDeleting}
                    >
                        {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteStudentModal