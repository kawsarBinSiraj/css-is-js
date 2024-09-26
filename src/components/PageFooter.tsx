import React from "react";
import Image from "next/image";
import LOGO from "../images/CSS_icon.svg.png";
import Link from "next/link";

export const PageFooter = () => {
    return (
        <>
            <footer className="w-full py-10">
                <div className="container text-center">
                    <Link href="/" className="inline-flex items-center text-4xl font-black">
                        <Image src={LOGO} alt="logo" width={75} height={50} />
                        .js
                    </Link>
                    <ul className="text-lg flex items-center justify-center flex-col md:flex-row py-16 gap-6 md:gap-12 transition-all duration-500">
                        <li>
                            <Link href="/" className="text-gray-800 hover:text-indigo-600">
                                CSS.js
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-gray-800 hover:text-indigo-600">
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link href="/visualization" className="text-gray-800 hover:text-indigo-600">
                                Visualization
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href={"https://kawsarbinsiraj.github.io/"} className="text-gray-800 hover:text-indigo-600">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-5 border-t border-gray-200">
                    <div className="container">
                        <div className="flex items-center flex-col-reverse justify-between md:flex-row">
                            <span className="text-sm text-gray-500 mt-7 md:mt-0">
                                <Link target="_blank" href={"https://kawsarbinsiraj.github.io/"} className="text-blue-500">
                                    ©kawsarbinsiraj.github.io
                                </Link>{" "}
                                {new Date().getFullYear()}, All rights reserved.
                            </span>
                            <div className="flex items-center flex-col  gap-4 md:flex-row">
                                <input type="text" name="email" className="py-3 px-6 h-12 border border-gray-300 shadow-sm rounded-full focus:outline-none" placeholder="Enter your mail.." />
                                <button className="h-12 py-3.5 px-7 text-sm bg-indigo-600 shadow-sm rounded-full text-white font-bold hover:bg-indigo-700">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
