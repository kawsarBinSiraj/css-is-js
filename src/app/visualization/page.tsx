"use client";
import { Options } from "@/components/Options";
import InfiniteCarousel from "@/components/visualization/infinite-carousel/InfiniteCarousel";
import React from "react";

const Visualization = () => {
    // Adjust the type of value to match the Option interface
    const handleOptionChange = (value: {} | null) => {
        if (value) {
            console.log("Selected option:", value);
            // Implement your logic based on the selected option
        } else {
            console.log("No option selected");
        }
    };

    return (
        <div className="visualizer-page py-16">
            <div className="container">
                <header className="mb-14 flex">
                    <div className="title">
                        <h2 className="text-3xl font-semibold font-poppins">
                            All are example only coded by <span className="text-lime-600">pure css</span>
                        </h2>
                        <p className="text-xl">(not even a single line of js)</p>
                    </div>
                    <div className="options ms-auto">
                        <label htmlFor="#" className="mb-1 block font-medium">
                            Select Visualize option
                        </label>
                        <div className="react-select">
                            <Options
                                className="w-80"
                                options={[
                                    { value: "infinite-carousel", label: "Infinite Carousel" },
                                    // { value: "duck-hunt", label: "Duck Hunt (Game)" },
                                ]}
                                cb={handleOptionChange}
                            />
                        </div>
                    </div>
                </header>
                <InfiniteCarousel />
            </div>
        </div>
    );
};

export default Visualization;
