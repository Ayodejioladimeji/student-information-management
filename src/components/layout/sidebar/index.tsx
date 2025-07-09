'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Home, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const navItems = [
    {
        label: 'Dashboard',
        icon: Home,
        href: '/dashboard',
    },
    {
        label: 'Students',
        icon: User,
        href: '/students',
    },
];



export default function Sidebar({openSidebar, setOpenSidebar}: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="bg-white fixed h-screen z-20 w-full max-w-[250px] px-4 py-6 flex flex-col border-r border-gray-200">
            {/* Logo */}
            <div className="mb-8 px-2">
                <Link href="/">
                    <Image
                        src="/assets/miva-logo.png"
                        alt="miva logo"
                        width={100}
                        height={100}
                        className="rounded"
                        priority
                    />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                    const isActive = pathname.includes(item.href);
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium text-sm mb-2
                            ${isActive
                                    ? 'bg-[#1E293B] text-white'
                                    : 'text-gray-800 hover:bg-gray-300'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
