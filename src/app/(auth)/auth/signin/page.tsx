'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Mail, Key, Eye, EyeOff, Lock } from 'lucide-react';
import Image from 'next/image';
import cogoToast from '@successtar/cogo-toast';
import { signIn } from 'next-auth/react';
import { ButtonLoader, Loader } from '@/components/ui/loadder';

const loginSchema = z.object({
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [loginData, setLoginData] = useState<LoginFormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {

            const res = await signIn('credentials', {
                email: loginData.email,
                password: loginData.password,
                redirect: false,
            });

            if (res?.error) {
                cogoToast.error("Invalid email or password");
                setLoading(false);
                return;
              }
            cogoToast.success('Login successful!');
            router.push('/dashboard');
            

        } catch (error) {
            cogoToast.error('An unexpected error occurred.');

        } finally {
            setLoading(false);
        }
    };

    // 

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-800 h-[300px] w-full pt-20">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white px-4">
                    Provide account information
                </h1>
            </div>

            <div className="w-full max-w-md py-8 px-8 -mt-20 bg-white shadow-lg rounded-lg">
                <div className="space-y-6">

                    <div className="mb-8 flex justify-center">
                        <Image
                            src="/assets/miva-logo.png"
                            width={100}
                            height={100}
                            alt="Miva Logo"
                            priority
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-center">
                        Sign in to your account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="mb-4">
                            <label htmlFor="email" className="sr-only">Email address</label>

                            <div className="relative h-12">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="text-gray-400 w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={loginData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-full pl-10 pr-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Error below input box */}
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>


                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative h-12">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="text-gray-400 w-5 h-5" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={loginData.password}
                                    onChange={handleInputChange}
                                    className="w-full h-full pl-10 pr-10 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center gap-2 justify-center py-3 px-4 rounded-md shadow-sm text-white bg-gray-800 hover:bg-red-500 mt-4 cursor-pointer"
                        >
                            Sign in
                            {loading && <ButtonLoader/>}
                        </button>
                    </form>

                    <p className="text-sm text-center text-gray-400 mt-4">
                        Login info: <span className="font-bold">user@example.com - user@1234</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
