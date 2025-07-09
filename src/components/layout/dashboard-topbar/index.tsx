'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}


export default function DashboardTopBar({ openSidebar, setOpenSidebar }: SidebarProps) {

    return (
        <header className="w-full sticky top-0 bg-white border-b border-gray-300">
            <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
                <Menu/>

                <div className="flex items-center gap-2">
                    <div className="size-10 border rounded-full">
                        <Image
                            src="/assets/miva-logo.png"
                            alt="miva logo"
                            width={100}
                            height={100}
                            className="rounded-full size-10"
                            priority
                        />
                    </div>
                    <p>Admin</p>
                </div>
            </div>
        </header>
    );
}
