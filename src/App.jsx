import { useState } from "react";
import Roundiv from "./components/RoundDiv";
import TrackingItem from "./components/TrackingItem";
import { data } from "./constants";
import { twMerge } from "tailwind-merge";

function App() {
    const [time, setTime] = useState("Weekly");

    return (
        <main className="flex items-center justify-center min-h-screen p-8 sm:p-10">
            <section className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:grid-rows-2">
                <article className="flex flex-col w-full row-span-2 overflow-hidden bg-blue-dark rounded-xl">
                    <Roundiv className="flex flex-row items-center gap-6 p-8 pb-0 pb-8 sm:pb-20 sm:gap-10 sm:items-start sm:flex-col bg-blue">
                        <img
                            src="/images/image-jeremy.png"
                            className="w-20 h-20 border-2 border-white rounded-full aspect-square"
                            alt=""
                        />
                        <div>
                            <p className="text-base sm:text-sm">Report for</p>
                            <h1 className="text-[28px] sm:text-[42px] leading-tight font-light">
                                Jeremy <br className="hidden sm:block" /> Robson
                            </h1>
                        </div>
                    </Roundiv>
                    <div className="flex flex-row justify-between gap-3 p-8 sm:flex-col pt-7">
                        {["Daily", "Weekly", "Monthly"].map((t, index) => (
                            <button
                                key={index}
                                className={twMerge(
                                    "w-full font-normal text-center sm:text-left duration-75 text-blue-desa hover:text-white",
                                    time == t && "text-white"
                                )}
                                onClick={() => setTime(t)}
                            >
                                <h1>{t}</h1>
                            </button>
                        ))}
                    </div>
                </article>

                {data.map((el, index) => {
                    return (
                        <TrackingItem
                            key={index}
                            index={index}
                            title={el.title}
                            current={
                                (time === "Daily" &&
                                    el.timeframes.day.current) ||
                                (time === "Weekly" &&
                                    el.timeframes.weekly.current) ||
                                (time === "Monthly" &&
                                    el.timeframes.monthly.current)
                            }
                            previous={
                                (time === "Daily" &&
                                    el.timeframes.daily.previous) ||
                                (time === "Weekly" &&
                                    el.timeframes.weekly.previous) ||
                                (time === "Monthly" &&
                                    el.timeframes.monthly.previous)
                            }
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default App;
