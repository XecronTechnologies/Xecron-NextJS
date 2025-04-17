"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Navbar = () => {
    const pathname = usePathname();
    const { user } = useSelector((state:any) => state.auth);

    const routes =[
        {path: "/",name:"Home"},
        {path:"/services",name:"Services"},
        {path:"/about",name:"About"},
        {path:"/contact",name:"Contact"},
    ];

    return(
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex item-center">
                        {/* <Link href="/" className="text-xl font-bold text-gray-900">
                        Xecron Technologies
                        </Link> */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {routes.map((route)=>(
                                <Link key={route.path} href={route.path} className={`${pathname===route.path?"border-indigo-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}> 
                                {route.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        {user?(
                            <button onClick={()=>{/*logic*/}}>Logout</button>
                        ):(
                            <Link href="/login">
                                <button>Login</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;