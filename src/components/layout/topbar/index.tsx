'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function TopBar() {
    const { data: session, status } = useSession();

    // 

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 h-16 flex flex-wrap gap-6 items-center justify-between">
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

                <div className="flex gap-5">
                    {status === "authenticated" ? 
                    <Link href="/dashboard"
                        className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Go to Dashboard
                    </Link>
                    :
                    <Link href="/auth/signin"
                        className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </Link>}

                    <Link href="/auth/signin"
                        className="bg-red-500 hidden sm:flex hover:bg-gray-800 text-white font-medium px-6 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
}
