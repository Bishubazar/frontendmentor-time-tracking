import React, { useState } from "react";
import Roundiv from "./RoundDiv";
import { twMerge } from "tailwind-merge";

const TrackingItem = ({ ...props }) => {
    const [type, setType] = useState(props.index);

    const colorMap = [
        {
            Work: ["bg-red-l", "images/icon-work.svg"],
        },
        {
            Play: ["bg-blue-soft", "images/icon-play.svg"],
        },
        {
            Study: ["bg-red-l-2", "images/icon-study.svg"],
        },
        {
            Exercise: ["bg-lime", "images/icon-exercise.svg"],
        },
        {
            Social: ["bg-violet", "images/icon-social.svg"],
        },
        {
            "Self Care": ["bg-orange-soft", "images/icon-self-care.svg"],
        },
    ];

    const colorClass = colorMap[props.index][props.title][0] || "";
    const colorImg = colorMap[props.index][props.title][1] || "";

    return (
        <article className={"relative mt-12 "} {...props}>
            <Roundiv
                className={twMerge(
                    "absolute left-0 w-full h-full overflow-hidden -top-12 ",
                    colorClass
                )}
            >
                <img
                    src={colorImg}
                    alt=""
                    className="absolute -top-2 right-5"
                />
            </Roundiv>
            <Roundiv className="w-full h-full overflow-hidden">
                <button className="relative flex flex-col gap-2 sm:gap-5 justify-between w-full h-full p-8 sm:p-6  px-8 duration-75 bg-blue-dark hover:bg-[#34397b]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl sm:text-base">{props.title}</h1>

                        <img
                            src="/images/icon-ellipsis.svg"
                            alt=""
                            className="object-contain w-5 h-5 hover:fill-white"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between text-left sm:items-start sm:flex-col">
                        <h1 className="mb-2 text-4xl font-light sm:text-6xl">
                            {props.current}hrs
                        </h1>
                        <p className="text-lg sm:text-sm">
                            Last week - {props.previous}hrs
                        </p>
                    </div>
                </button>
            </Roundiv>
        </article>
    );
};

export default TrackingItem;
