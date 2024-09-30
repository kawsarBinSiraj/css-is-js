"use client";
import CodeWithSuspense from "@/components/CodeWithSuspense";
import React, { Suspense, useEffect, useState } from "react";

const Visualization = () => {
    return (
        <div className="visualizer-page py-10">
            <div className="container">
                <header className="mb-14 text-center py-10">
                    <h2 className="text-6xl font-black">
                        Coded by <span className="text-blue-500">pure css &#x2015;</span>
                    </h2>
                    <p className="text-xl mt-3">(not even a single line of js)</p>
                </header>
                <Suspense fallback={<h1 className="text-6xl text-center py-5">Loading ...</h1>}>
                    <CodeWithSuspense />
                </Suspense>
            </div>
        </div>
    );
};

export default Visualization;
