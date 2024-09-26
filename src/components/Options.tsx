"use client";
import React, { useState } from "react";
import Select from "react-select";

interface Option {
    label: string; // Property representing the display text
    value: string | number; // Type you expect for the value
    // Add any other properties that your options may have
}

interface OptionsProps {
    options: Option[];
    className?: string;
    cb?: (value: Option | null) => void; // Allow cb to receive Option or null
}

export const Options: React.FC<OptionsProps> = ({ options = [], className = "", cb = null }) => {
    const [selected, setSelected] = useState<Option | null>({ value: "infinite-carousel", label: "Infinite Carousel" });

    return (
        <>
            <Select
                value={selected}
                onChange={(value) => {
                    setSelected(value);
                    if (cb) cb(value); // value can be Option or null
                }}
                className={className}
                options={options}
                isClearable={false}
                isSearchable={true}
            />
        </>
    );
};
