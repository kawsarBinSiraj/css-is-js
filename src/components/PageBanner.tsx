import React from "react";
import { TransformOrigin } from "./visualization/transform-origin/TransformOrigin";
import Link from "next/link";

export const PageBanner = () => {
    return (
        <div className="page-banner text-center py-5">
            <div className="container">
                <div className="min-h-[75vh] flex items-center flex-col justify-center mb-10 mt-5">
                    <div className="banner-text mb-12">
                        <h1 className="text-8xl  mb-4 font-black">
                            CSS is a synonym <br /> of javascript!
                        </h1>
                        <p className="text-3xl mb-4">
                            Isn't it? &#x2015; &nbsp;
                            <Link className="px-4 py-2 rounded bg-blue-500 transition duration-300 hover:bg-blue-800 text-xl text-lime-100" href={"/visualization"}>
                                Let's prove
                            </Link>
                        </p>
                        <p className="text-2xl">An approachable, performant and versatile interaction with pure css </p>
                    </div>
                    <TransformOrigin />
                </div>
            </div>
        </div>
    );
};

