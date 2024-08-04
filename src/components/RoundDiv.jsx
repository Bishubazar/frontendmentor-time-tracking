import React from "react";
import { twMerge } from "tailwind-merge";

const Roundiv = ({ children, className = "", ...props }) => {
    return <div className={twMerge("rounded-2xl", className)}>{children}</div>;
};

export default Roundiv;
