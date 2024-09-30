import React, { Suspense, useEffect, useState } from "react";
import CodePreviewAndEdit from "./CodePreviewAndEdit";
import { useSearchParams } from "next/navigation";
import { options } from "../lib/options";
import infiniteCarousel from "./visualization/infinite-carousel";
import duckHuntGame from "./visualization/duck-hunt-game";
import clock from "./visualization/clock";
import slider from "./visualization/slider";

const CodeWithSuspense = () => {
    const searchParams = useSearchParams();
    const [component, setComponent] = useState<any>(infiniteCarousel || {});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const slug = searchParams.get("slug");
        if (slug) {
            setLoading(true);
            switch (slug) {
                case "infinite-carousel":
                    setComponent({ id: Math.random(), ...infiniteCarousel });
                    break;
                case "duck-hunt":
                    setComponent({ id: Math.random(), ...duckHuntGame });
                    break;
                case "clock":
                    setComponent({ id: Math.random(), ...clock });
                    break;
                case "slider":
                    setComponent({ id: Math.random(), ...slider });
                    break;
                default:
                    break;
            }
        } else setComponent(infiniteCarousel);
        setTimeout(() => setLoading(false), 600);
    }, [searchParams]);

    return (
        <>
            {loading ? (
                <h1 className="text-5xl text-violet-500 text-center">Loading...</h1>
            ) : (
                <>
                    <CodePreviewAndEdit key={component?.id} html={component?.html} css={component?.css} />
                </>
            )}
        </>
    );
};

export default CodeWithSuspense;
