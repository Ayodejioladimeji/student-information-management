'use client';

import { Menu, X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}


export default function DashboardTopBar({setOpenSidebar }: SidebarProps) {
      const { data: session } = useSession();

    return (
        <header className="w-full sticky top-0 bg-white border-b border-gray-300">
            <div className="relative px-4 sm:px-6 h-16 flex items-center justify-end">
                <Menu className='flex lg:hidden absolute left-[15px]' onClick={() => setOpenSidebar(true)}/>

                <div className="flex items-center gap-2">
                    <div className="size-10 border rounded-full">
                        <Image
                            src="/assets/user.jpg"
                            alt="miva logo"
                            width={100}
                            height={100}
                            className="rounded-full size-10"
                            priority
                        />
                    </div>

                    <div>
                        {session?.user?.name && <p className="text-sm">{session.user.name}</p>}
                        {session?.user?.email && <p className="text-sm">{session.user.email}</p>}
                    </div>
                </div>
            </div>
        </header>
    );
}
