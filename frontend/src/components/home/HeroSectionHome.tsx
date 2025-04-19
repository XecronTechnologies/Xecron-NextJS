"use client"
// import React, {useState} from "react";
import GradientButton from "../common/LogoColorButton"

export const HeroSectionHome: React.FC = () => {
    // const [check,setCheck] = useState("Sample")

    return (
        <div className="bg-gray-50 py-30 font-['Calibri'] text-lg">
            <div className="px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mt-10 text-center">
                        <div className="w-full">
                            <h1 className="text-3xl sm:text-5xl">
                            Welcome To&nbsp;
                                <span className=" font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                                Xecron Technologies
                            </span>
                        </h1>
                        
                        <h3 className="text-lg mt-2">
                            Innovating the Future with Cutting-Edge Solutions. Explore our advanced tech services today!
                        </h3>
                        </div>
                    </div>

                    <div className="flex justify-center my-6">
                        <GradientButton href="/contact" text="Get the Apps!" className="mx-2"/>
                        <a href="#" className="py-2 px-4 mx-2 border border-gray-400 rounded-md text-gray-700 font-semibold hover:bg-gray-100 transition duration-300">Documentation</a>
                    </div>

                    <div className="flex mt-6 justify-center">
                        <video src={"video1"} autoPlay loop muted className="rounded-lg w-1/2 border border-gray-300 mx-2 my-4">
                            <source type="video/mp4" />
                            Your Bowser does not support the video tag.
                        </video>
                        <video src={"video2"} autoPlay loop muted className="rounded-lg w-1/2 border border-gray-300 shadow-md mx-2 my-4">
                            <source type="video/mp4" />
                            Your Bowser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
