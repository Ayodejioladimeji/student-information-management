"use client"

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import { useState } from "react"
import Loading from "./ui/loading"
import { useRouter } from "next/navigation"
import { useStudents } from "@/context/students"
import cogoToast from "@successtar/cogo-toast"

export const Delete = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
     const { deleteStudent} = useStudents()


     const handleDelete = async (e: React.FormEvent) => {
            e.preventDefault()
            setLoading(true)
    
            try {
                await deleteStudent(id)
    
                cogoToast.success('Student deleted successfully')
                router.push('/students')
            } catch (error) {
                console.error(error)
                cogoToast.error('Failed to update student')
            } finally {
                setLoading(false)
            }
        }
    
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="outline" size="md" 
                    background="red"
                    color="white"
                    className="flex items-center gap-3"
                    >
                    Delete
                </Button>
            </Dialog.Trigger>

            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Delete Student</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>
                                Are you sure you want to delete student?, This action is not reversible once done.
                            </p>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button onClick={handleDelete} background="red" color="white">Delete {loading && <Loading/>}</Button>
                        </Dialog.Footer>

                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

