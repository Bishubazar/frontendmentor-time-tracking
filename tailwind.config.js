/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    DEFAULT: "hsl(246, 80%, 60%)",
                    soft: "hsl(195, 74%, 62%)",
                    dark: "hsl(235, 46%, 20%)",
                    verydark: "hsl(226, 43%, 10%)",
                    desa: "hsl(235, 45%, 61%)",
                    pale: "hsl(236, 100%, 87%)",
                },
                red: {
                    l: "hsl(15, 100%, 70%)",
                    "l-2": "hsl(348, 100%, 68%)",
                },
                lime: {
                    DEFAULT: "hsl(145, 58%, 55%)",
                },
                violet: {
                    DEFAULT: "hsl(264, 64%, 52%)",
                },
                orange: {
                    soft: "hsl(43, 84%, 65%)",
                },
                //           - Blue: hsl(246, 80%, 60%)

                // - Light red (work): hsl(15, 100%, 70%)
                // - Soft blue (play): hsl(195, 74%, 62%)
                // - Light red (study): hsl(348, 100%, 68%)
                // - Lime green (exercise): hsl(145, 58%, 55%)
                // - Violet (social): hsl(264, 64%, 52%)
                // - Soft orange (self care): hsl(43, 84%, 65%)

                // ### Neutral

                // - Very dark blue: hsl(226, 43%, 10%)
                // - Dark blue: hsl(235, 46%, 20%)
                // - Desaturated blue: hsl(235, 45%, 61%)
                // - Pale Blue: hsl(236, 100%, 87%)
            },
        },
    },
    plugins: [],
};
