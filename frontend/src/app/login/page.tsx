"use client";

import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,  handleGoogleLogin, } from "@/lib/firebase/config";  //removed unused for build : googleProvider,handleSignUp
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { loginStart, loginSuccess, loginFailure } from "@/redux/slices/authSlice";
// import GradientButton from "@/components/common/LogoColorButton"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";



export default function LoginPage() {
    const [, setFormVisible] = useState(false);  //remomved  for build  :formVisible
    const [error, setError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFormVisible(true);
        }, 100)
    }, [])


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                            Login in to your account
                        </h2><br />
                        <p className="text-center text-gray-400 text-sm">Login with your mail</p>
                        {/* </h2> */}
                    </div>
                    {error && (
                        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative" role="alert">
                            <strong className="font-bold">Error! </strong><span className="block sm:inline">{error}</span>
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
                            <div className="relative">
                                <input
                                    aria-label="Password"
                                    id="password"
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    autoComplete="current-password"
                                    required

                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none" onClick={() => setPasswordVisible(!passwordVisible)}>
                                    <span className="sr-only">Show password</span>
                                    {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </button>

                            </div>
                        </div>

                        {/* Remember Me  */}
                        {/* <div className="flex items-center justify-between">
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
                    </div> */}

                        <div className="mt-8">
                            <div className="mt-4" >
                                <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-600 text-white py-2 rounded-md transition-colors duration-300 font-bold">Log In</button>
                            </div>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="mt-8 flex items-center justify-between">
                        <span className="border-b w-1/4 border-gray-600"></span>
                        <span className="text-gray-400 text-sm">OR</span>
                        <span className="border-b w-1/4 border-gray-600"></span>
                    </div>


                    {/* GOOGLE */}
                    <button onClick={() => handleGoogleLogin(setError)} className="mt-6 w-full flex items-center justify-center text-gray-800 bg-white  border border-gray-400 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus-ring focus:ring-cyan-300 focus:outline-none">
                        <FcGoogle className="h-6 w-6 mr-3" />
                        Continue with Google
                    </button>

                    <p className="text-center text-gray-400 text-sm mt-6">
                        Don&apos;t have an account? <a href="/login/signup" className="text-pink-500 hover:underline">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}