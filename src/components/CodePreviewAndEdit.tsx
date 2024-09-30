"use client";
import React, { useState, useCallback } from "react";
import { NavTabs } from "@/components/NavTabs";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";
const extensions = [javascript({ jsx: true })];

interface CodePreviewAndEditProps {
    html: string;
    css: string;
}

const CodePreviewAndEdit: React.FC<CodePreviewAndEditProps> = ({ html = "", css = "" }) => {
    const [active, setActive] = useState<number | null>(1);
    const [htmlView, setHtmlView] = useState<string>(html);
    const [cssView, setCssView] = useState<string>(css);

    const handleHtmlView = React.useCallback((val: any, viewUpdate: any) => {
        setHtmlView(val);
    }, []);

    const handleCssView = React.useCallback((val: any, viewUpdate: any) => {
        setCssView(val);
    }, []);

    return (
        <div id="code-preview-edit">
            <div className="pb-8 relative z-[500]">
                <NavTabs
                    cb={(value) => {
                        setActive(value);
                    }}
                />
            </div>
            <div id="panel" className="px-10">
                {active == 1 && <div id="preview" dangerouslySetInnerHTML={{ __html: htmlView }}></div>}

                {active == 2 && (
                    <div id="html">
                        <CodeMirror value={htmlView} height="500px" theme={dracula} extensions={extensions} onChange={handleHtmlView} />
                    </div>
                )}
                {active == 3 && (
                    <div id="css">
                        <CodeMirror value={cssView} height="500px" theme={dracula} extensions={extensions} onChange={handleCssView} />
                    </div>
                )}

                <style dangerouslySetInnerHTML={{ __html: cssView }}></style>
            </div>
        </div>
    );
};

export default CodePreviewAndEdit;
