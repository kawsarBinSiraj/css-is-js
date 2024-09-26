import React from "react";
import "./TransformOrigin.css";

export const TransformOrigin = () => {
    return (
        <>
            <div id="toi">
                <div className="origin" style={{ transformOrigin: "top left" }}></div>
                <div className="origin" style={{ transformOrigin: "top center" }}></div>
                <div className="origin" style={{ transformOrigin: "top right" }}></div>
                <div className="origin" style={{ transformOrigin: "center left" }}></div>
                <div className="origin" style={{ transformOrigin: "center center" }}></div>
                <div className="origin" style={{ transformOrigin: "center right" }}></div>
                <div className="origin" style={{ transformOrigin: "bottom left" }}></div>
                <div className="origin" style={{ transformOrigin: "bottom center" }}></div>
                <div className="origin" style={{ transformOrigin: "bottom right" }}></div>
            </div>
        </>
    );
};
