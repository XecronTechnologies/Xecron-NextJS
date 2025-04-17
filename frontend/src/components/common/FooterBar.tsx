// Suggested code may be subject to a license. Learn more: ~LicenseLog:525241418.
"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const FooterBar: React.FC = () => {
    const { companyInfo, pagelinks, businessLinks, extraLinks } = useAppSelector((state) => state.footer);
    return (
        <footer className="bg-white text-gray-900 py-12 px-4 md:px-10 lg:px-20 flex justify-center items-center">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Image src={companyInfo.logo} width={40} height={40} alt="Company Logo" className="mr-2" />
                            <span className="text-lg font-bold text-gray-800">Xecron Technologies</span>
                        </div>
                        <p className="text-gray-600">{companyInfo.description}</p>
                        <address className="text-gray-600">{companyInfo.address}</address>
                        <p className="text-gray-600">{companyInfo.phone}</p>
                        <div className="flex space-x-4">
                            {companyInfo.socialMedia.map((social) => (
                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                                    <Image src={social.icon} alt={social.name} width={24} height={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Pages */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4 text-gray-800">Web</h3>
                        <ul className="space-y-2 text-sm">
                            {pagelinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.url} className="text-gray-700 hover:text-gray-900 transition-colors" >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: For Business */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4 text-gray-800">For Business</h3>
                        <ul className="space-y-2 text-sm">
                            {businessLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.url} className="text-gray-700 hover:text-gray-900 transition-colors" >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Extra Links */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4 text-gray-800"><br /></h3>
                        <ul className="space-y-2 text-sm">
                            {extraLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.url} className="text-gray-700 hover:text-gray-900 transition-colors" >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>{/* border-gray-200 */}
                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Xecron Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}