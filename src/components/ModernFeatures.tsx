import React from "react";
import { LuListTree } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";

export const ModernFeatures = () => {
    return (
        <div id="modern-features" className="py-16">
            <div className="container">
                <div className="lg:max-w-[50%] mx-auto mb-12">
                    <FaRunning className="text-6xl inline-block mb-3 text-indigo-500" />
                    <p className="text-lg mb-3">Ready-made interaction</p>
                    <h3 className="text-2xl font-semibold font-poppins text-balance mb-3">Move even faster with css interaction</h3>
                    <p className="mb-0 text-[14px] text-slate-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus, eos dolores atque maxime commodi quisquam architecto necessitatibus consequatur odit consequuntur
                        explicabo est aliquid illum
                    </p>
                </div>
                <div className="lg:max-w-[50%] mx-auto text-end">
                    <LuListTree className="text-6xl inline-block mb-3 text-lime-500" />
                    <p className="text-lg mb-3">Modern features</p>
                    <h3 className="text-2xl font-semibold font-poppins mb-3 text-balance">Cutting-edge user interface</h3>
                    <p className="mb-0 text-[14px] text-slate-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus, eos dolores atque maxime commodi quisquam architecto necessitatibus consequatur odit consequuntur
                        explicabo est aliquid illum
                    </p>
                </div>
            </div>
        </div>
    );
};
