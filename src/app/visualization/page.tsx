"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Options } from "@/components/Options";
import CodePreviewAndEdit from "@/components/CodePreviewAndEdit";
import infiniteCarousel from "@/components/visualization/infinite-carousel";
import duckHuntGame from "@/components/visualization/duck-hunt-game";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Visualization = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [component, setComponent] = useState<any>(infiniteCarousel || {});
    const [loading, setLoading] = useState<boolean>(true);

    type OptionType = { label: string; value: string | number } | null;
    // Adjust the type of value to match the Option interface
    const handleOptionChange = (option: { label: string; value: string | number } | null) => {
        const { value } = option || {};
        router.push(`/visualization?slug=${value}`);
    };

    useEffect(() => {
        setLoading(true);
        const slug = searchParams.get("slug");
        switch (slug) {
            case "infinite-carousel":
                setComponent({ id: Math.random(), ...infiniteCarousel });
                break;
            case "duck-hunt":
                console.log(duckHuntGame);
                setComponent({ id: Math.random(), ...duckHuntGame });
                break;
            default:
                setComponent({ id: Math.random(), ...infiniteCarousel });
                break;
        }
        setTimeout(() => setLoading(false), 1000);
    }, [searchParams]);

    return (
        <div className="visualizer-page py-10">
            <div className="container">
                <header className="mb-14 flex">
                    <div className="title">
                        <h2 className="text-6xl font-light">
                            Coded by <span className="text-blue-500">pure css</span>
                        </h2>
                        <p className="text-xl text-blue-500">(not even a single line of js)</p>
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
                                    { value: "duck-hunt", label: "Duck Hunt (Game)" },
                                ]}
                                cb={handleOptionChange}
                            />
                        </div>
                    </div>
                </header>
                {loading ? (
                    <>
                        <h1 className="text-6xl text-center py-5">Loading ...</h1>
                    </>
                ) : (
                    <CodePreviewAndEdit key={component?.id} html={component?.html} css={component?.css} />
                )}
            </div>
        </div>
    );
};

export default Visualization;
