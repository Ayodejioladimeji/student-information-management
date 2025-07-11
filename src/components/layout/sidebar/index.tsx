'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Home, LogOut, User, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from "react";
import { signOut } from 'next-auth/react';


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




export default function Sidebar({ openSidebar, setOpenSidebar }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter()

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/auth/signin');
    };

    return (
        <>
            {openSidebar && (
                <div
                    className='fixed inset-0 bg-black/60 z-20 lg:hidden'
                    onClick={() => setOpenSidebar(false)}
                />
            )}

            <aside className={`bg-white fixed h-screen z-20 w-full max-w-[250px] px-4 py-6 flex flex-col justify-between border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${openSidebar ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}>

                <div>
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

                    {/* close sidebar */}
                    <X className='flex lg:hidden absolute right-[15px]' onClick={() => setOpenSidebar(false)} />

                    {/* Navigation */}
                    <nav className="flex flex-col gap-1" onClick={() => setOpenSidebar(false)} >
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
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-gray-300 text-sm text-gray-700 hover:bg-red-500 hover:text-white transition cursor-pointer"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </aside>
        </>
    );
}
