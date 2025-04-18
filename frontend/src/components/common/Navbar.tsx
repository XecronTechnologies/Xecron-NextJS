"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
// import { useSelector } from "react-redux";

interface NavItem {
    name: string;
    url: string;
}

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const { navItems } = useAppSelector((state) => state.navigationBar);



    return (
        <nav className="bg-white shadow-sm fixed w-[100%]">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">    {/* removed max-w-7xl */}
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <Image src={"/logo.png"} width={45} height={45} alt="Xecron Technologies Logo" />
                        </div>
                        <Link href="/" className="text-xl  text-gray-900 my-auto font-['Calibri']">
                            <span className="font-bold">Xecron</span> Technologies
                        </Link>
                        <div className="hidden sm:ml-20 sm:flex sm:space-x-8">
                            {navItems.map((route: NavItem) => {
                                return (
                                    <Link key={route.url} href={route.url} className={`${pathname === route.url ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        {route.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className="flex items-center"> 
                        {user?(
                            <p></p>
                        ):(
                            <Link href="/login">
                                <button>Login</button>
                            </Link>
                        )}
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;