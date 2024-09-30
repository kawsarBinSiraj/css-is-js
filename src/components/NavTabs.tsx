"use client";
import React, { useState, useEffect, Suspense } from "react";
import { SelectOpt } from "./SelectOpt";
import { options } from "../lib/options";

interface Props {
    cb?: (value: number | null) => void; // Adjusting cb to allow number or null
}

export const NavTabs: React.FC<Props> = ({ cb = () => {} }) => {
    const [active, setActive] = useState<number | null>(1);

    useEffect(() => {
        if (cb) cb(active);
    }, [active, cb]); // Adding active as a dependency so cb is called when it changes

    const handleTabClick = (tabIndex: number) => {
        setActive(tabIndex);
        // Set the active tab when clicked
    };

    return (
        <div className="nav-tav border-b border-violet-300 pb-0 font-poppins px-10 text-lg flex">
            <button
                onClick={() => handleTabClick(1)}
                className={`rounded rounded-b-none uppercase border border-b-0 text-black px-4 py-1 ${active == 1 ? "bg-white border-violet-300" : "border-transparent"}`}
            >
                Preview
            </button>
            <button
                onClick={() => handleTabClick(2)}
                className={`rounded uppercase rounded-b-none border border-b-0 text-black px-4 py-1 ${active == 2 ? "bg-white border-violet-300" : "border-transparent"}`}
            >
                Html
            </button>
            <button
                onClick={() => handleTabClick(3)}
                className={`rounded uppercase rounded-b-none border border-b-0 text-black px-4 py-1 ${active == 3 ? "bg-white border-violet-300" : "border-transparent"}`}
            >
                Css
            </button>
            <div className="ms-auto pb-2 flex items-center gap-2">
                <p className="text-lg">Select Option:</p>
                <Suspense fallback={<p>Loading...</p>}>
                    <SelectOpt className="w-72" options={options} />
                </Suspense>
            </div>
        </div>
    );
};
