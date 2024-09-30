import React, { Suspense, useEffect, useState } from "react";
import CodePreviewAndEdit from "./CodePreviewAndEdit";
import { useSearchParams } from "next/navigation";
import infiniteCarousel from "./visualization/infinite-carousel";
import duckHuntGame from "./visualization/duck-hunt-game";

const CodeWithSuspense = () => {
    const searchParams = useSearchParams();
    const [component, setComponent] = useState<any>(infiniteCarousel || {});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const slug = searchParams.get("slug");
        switch (slug) {
            case "infinite-carousel":
                setComponent({ id: Math.random(), ...infiniteCarousel });
                break;
            case "duck-hunt":
                setComponent({ id: Math.random(), ...duckHuntGame });
                break;
            default:
                setComponent({ id: Math.random(), ...infiniteCarousel });
                break;
        }
        setTimeout(() => setLoading(false), 1000);
    }, [searchParams]);

    return (
        <>
           
            <CodePreviewAndEdit key={component?.id} html={component?.html} css={component?.css} />
        </>
    );
};

export default CodeWithSuspense;
