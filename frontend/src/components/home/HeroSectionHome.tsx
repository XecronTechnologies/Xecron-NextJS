"use client"
import GradientButton from "../common/LogoColorButton"

const smallBusinessBenefits = [
    "Affordable starter websites or web applications starting from ₹499",
    "Basic mobile apps for local businesses",
    "Monthly maintenance plans",
    "Free initial consultation",
];

const enterpriseBenefits = [
    "Custom software development",
    "AI and machine learning solutions",
    "Enterprise cloud architecture",
    "Dedicated development teams",
];

const CheckIcon = () => (
    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

interface BenefitItemProps {
    text: string;
}

export const HeroSectionHome: React.FC = () => {
    return (
        <div className="bg-gray-50 font-['Calibri'] text-lg">
            {/* Hero Section */}
            <div className="px-4 py-20">
                <div className="container mx-auto pt-20">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-full">
                            <h1 className="text-3xl sm:text-5xl">
                                Welcome To&nbsp;
                                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                                    Xecron Technologies
                                </span>
                            </h1>

                            <h3 className="text-lg mt-2">
                                Innovating the Future with Cutting-Edge Solutions for Businesses of All Sizes
                            </h3>
                            
                            {/* Important Note for Small Businesses */}
                            <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded max-w-2xl mx-auto">
                                <p className="text-blue-800 font-medium">
                                    <span className="font-bold">Important:</span> We specialize in affordable, scalable solutions tailored for small-scale businesses and startups.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center my-6">
                        <GradientButton href="/contact" text="Get Started Today" className="mx-2" />
                        {/* <a href="#" className="py-2 px-4 mx-2 border border-gray-400 rounded-md text-gray-700 font-semibold hover:bg-gray-100 transition duration-300">Documentation</a> */}
                    </div>

                    {/* <div className="flex mt-6 justify-center">
                        <video src={"video1"} autoPlay loop muted className="rounded-lg w-1/2 border border-gray-300 mx-2 my-4">
                            <source type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video src={"video2"} autoPlay loop muted className="rounded-lg w-1/2 border border-gray-300 shadow-md mx-2 my-4">
                            <source type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                     */}
                     <div className="flex mt-6 justify-center">
                        <img src={"https://qkkdkbnsgruubnzdplrx.supabase.co/storage/v1/object/public/xecron-technologies//smallscale-growth-xecron.webp"} alt="Image 1" className="rounded-lg w-1/2 border border-gray-300 mx-2 my-4" />
                        <img src={"https://qkkdkbnsgruubnzdplrx.supabase.co/storage/v1/object/public/xecron-technologies//xecron-app-looks-interface.webp"} alt="Image 2" className="rounded-lg w-1/2 border border-gray-300 shadow-md mx-2 my-4" />
                        
                    </div>
                </div>
            </div>

            {/* Who We Are Section */}
            <div className="px-4 py-16 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Who <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">We Are</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                            Xecron Technologies empowers businesses of all sizes with affordable, high-quality technology solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-blue-600">For Small Businesses</h3>
                            <p className="text-gray-700">
                                We understand small business challenges. Our solutions are budget-friendly without compromising on quality or scalability.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-purple-600">Our Commitment</h3>
                            <p className="text-gray-700">
                                Whether you're a startup or established enterprise, we deliver the same level of professionalism and technical excellence.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-pink-600">Flexible Solutions</h3>
                            <p className="text-gray-700">
                                From basic websites to complex systems, we scale our services to match your business size and budget.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Expertise Section */}
            <div className="px-4 py-16 bg-gray-100">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">Every Business</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                            We believe every business deserves access to quality technology, regardless of size.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-blue-600">Small Business Packages</h3>
                            <ul className="space-y-3 text-gray-700">
                                {smallBusinessBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon />
                                        {benefit}
                                </li>
                                ))}
                            </ul>
                            <div className="flex justify-center mt-6">
                                <GradientButton href="/small-business" text="Explore Small Biz Solutions" className="w-full text-center" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-purple-600">Enterprise Solutions</h3>
                            <ul className="space-y-3 text-gray-700">
                                {enterpriseBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon />
                                        {benefit}
                                </li>
                                ))}
                            </ul>
                            <a href="/enterprise" className="mt-6 w-full inline-block py-2 px-4 border border-gray-400 rounded-md text-gray-700 font-semibold hover:bg-gray-100 transition duration-300 text-center">Enterprise Services</a>
                        </div>
                    </div>

                    {/* Special Note for Small Businesses */}
                    <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                        <h3 className="text-2xl font-bold text-center mb-4 text-blue-800">Special Support for Small Businesses</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-blue-500 text-3xl font-bold mb-2">₹0</div>
                                <p className="text-gray-700">Down payment for initial consultation</p>
                            </div>
                            <div className="text-center">
                                <div className="text-blue-500 text-3xl font-bold mb-2">Flexible</div>
                                <p className="text-gray-700">Payment plans tailored to your cash flow</p>
                            </div>
                            <div className="text-center">
                                <div className="text-blue-500 text-3xl font-bold mb-2">1:1</div>
                                <p className="text-gray-700">Dedicated support representative</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}