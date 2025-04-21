// Suggested code may be subject to a license. Learn more: ~LicenseLog:2944556497.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2748291678.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4235506144.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3593954067.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2672461162.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2314030977.
"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { loginStart, loginSuccess, loginFailure } from "@/redux/slices/authSlice";

interface GradientButtonProps {
    text?: string;
    href: string;
    className?: string;
    fromColor?: string;
    toColor?: string;
    py?: string;
    px?: string;
    mx?: string;
}

import Link from "next/link";

const GradientButton: React.FC<GradientButtonProps> = ({
    text = "Button Text",
    href = "/dashboard",
    className = "",
    fromColor = "pink-500",
    toColor = "blue-500",
    py = "py-2",
    px = "px-4",
    mx = "mx-2",
}) => {
    return (
        <Link
            href={href}
            className={`bg-gradient-to-r from-${fromColor} to-${toColor} ${py} ${px} ${mx} rounded-md text-white font-semibold ${className} transition-transform active:scale-95`}
        >
            {text}
        </Link>

    )
}

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(loginStart());
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            dispatch(loginSuccess({ uid: user.uid, email: user.email, display: user.displayName }))
            router.push("/dashboard");
        }
        catch (err) {
            const error = err as Error;
            dispatch(loginFailure(error.message));
            setError(error.message);
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-100 py-6 flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                    <h2 className="text-center text-2xl font-semibold text-gray-800">
                        Sign in to your account
                    </h2>
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relativ">
                        {error}
                    </div>
                )}
                <form className="mt-12 space-y-6" onSubmit={handleSubmit}>

                    <div className="rounded-md shadow-sm space-y-px ">
                        <div>
                            <input


                                aria-label="Email address"

                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div>

                            <input
                                aria-label="Password"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required

                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center mt-4">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm mt-4">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot Your Password
                            </a>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="mt-4" >
                            <button type="submit" className="w-full"> <GradientButton text="Sign in" href="" className="w-full text-center" /></button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}