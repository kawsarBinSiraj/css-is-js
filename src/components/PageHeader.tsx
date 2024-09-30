"use client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";
import LOGO from "../images/CSS_icon.svg.png";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export const PageHeader = () => {
    const pathname = usePathname(); 
    const { theme, setTheme } = useTheme();

    return (
        <div className="page-header py-4 relative border-b bg-white dark:bg-black">
            <div className="container">
                <div className="row flex items-center justify-between">
                    <Link href="/" className="inline-flex items-center text-4xl font-black dark:text-blue-200">
                        <Image src={LOGO} alt="logo" width={50} height={50} />
                        .JS
                    </Link>
                    <nav className="nav flex gap-5 text-[15px] text-slate-500">
                        <Link href={"/visualization"} className={`hover:text-blue-600 dark:text-slate-400 ${pathname === '/visualization' && 'text-blue-500'}`}>
                            <span className="relative inline-flex h-2 w-2 me-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                            </span>
                            Visualization
                        </Link>
                        <Link href={"/"} className="hover:text-blue-600 dark:text-slate-400">
                            Resource
                        </Link>
                        <Link href={"/about"} className="hover:text-blue-600 dark:text-slate-400">
                            About
                        </Link>
                    </nav>
                    <div className="social-connections flex items-center gap-3 text-slate-500">
                        <select
                            className="border p-1 rounded me-3 text-sm  dark:border-slate-400  dark:text-slate-400"
                            onChange={(e) => {
                                setTheme(e.target.value);
                            }}
                            id="next-themes"
                            name="next-themes"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System</option>
                        </select>

                        <Link href={"/"} className="inline-flex items-center gap-2  dark:text-slate-400">
                            <FaGithub size={"1.2rem"} />
                            <small className="text-[15px]">92.4k</small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
