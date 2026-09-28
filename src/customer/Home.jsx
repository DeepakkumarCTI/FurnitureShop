import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories } from "../data";
import { useStore } from "../context/StoreContext";

const pics = {
    Living:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    Bedroom:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    Dining:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
    Office:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
};

const marqueeItems = [
    "CRAFTED FOR LIVING",
    "DESIGNED WITH CHARACTER",
    "TIMELESS FURNITURE",
    "WARM WOODS",
    "EVERYDAY COMFORT",
    "FORMA FURNITURE",
];

export default function Home() {
    const { products = [] } = useStore();

    return (
        <main className="w-full overflow-hidden bg-[#EFE5D8] text-[#24352F]">

            {/* Hero Section */}
            
            
            <section
                className="
        relative
        grid
        min-h-[560px]
        grid-cols-1
        overflow-hidden
        bg-[#24352F]
        lg:min-h-[600px]
        lg:grid-cols-2
    "
            >
                {/* ============================= */}
                {/* BACKGROUND VIDEO */}
                {/* ============================= */}

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
            pointer-events-none
            absolute
            inset-0
            z-0
            h-full
            w-full
            object-cover
            opacity-20
        "
                >
                    <source src="/hero-furniture.mp4" type="video/mp4" />
                </video>

                {/* VIDEO OVERLAY */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-[#24352F]/90
        "
                />

                {/* ============================= */}
                {/* RAINBOW BACKGROUND GLOWS */}
                {/* ============================= */}

                <div
                    className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            z-[2]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[conic-gradient(from_0deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
            opacity-15
            blur-3xl
            animate-hero-rainbow-glow
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -bottom-48
            right-[20%]
            z-[2]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[conic-gradient(from_180deg,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)]
            opacity-10
            blur-3xl
            animate-hero-rainbow-glow-reverse
        "
                />


                {/* ============================= */}
                {/* HERO CONTENT */}
                {/* ============================= */}

                <div
                    className="
            relative
            z-10
            flex
            flex-col
            justify-center
            overflow-hidden
            bg-[#24352F]
            px-5
            py-10
            sm:px-8
            sm:py-12
            md:px-10
            lg:px-12
            lg:py-10
            xl:px-16
        "
                >

                    {/* Decorative rainbow ring */}
                    <div
                        className="
                pointer-events-none
                absolute
                -left-12
                top-12
                h-28
                w-28
                rounded-full
                bg-[conic-gradient(from_0deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
                p-[2px]
                opacity-40
                animate-hero-rainbow-spin
            "
                    >
                        <div className="h-full w-full rounded-full bg-[#24352F]" />
                    </div>

                    {/* Large decorative ring */}
                    <div
                        className="
                pointer-events-none
                absolute
                -left-20
                top-4
                h-48
                w-48
                rounded-full
                border
                border-[#00cfff]/10
            "
                    />

                    {/* Floating rainbow dot */}
                    <span
                        className="
                pointer-events-none
                absolute
                right-[12%]
                top-[20%]
                h-3
                w-3
                rounded-full
                bg-[linear-gradient(135deg,#ff004c,#ff7a00,#ffe600)]
                shadow-[0_0_20px_rgba(255,122,0,0.45)]
                animate-hero-rainbow-dot
            "
                    />

                    {/* Floating cyan dot */}
                    <span
                        className="
                pointer-events-none
                absolute
                bottom-[20%]
                left-[8%]
                h-2.5
                w-2.5
                rounded-full
                bg-[linear-gradient(135deg,#00cfff,#4169ff,#9b4dff)]
                shadow-[0_0_20px_rgba(65,105,255,0.45)]
                animate-hero-rainbow-dot-reverse
            "
                    />


                    {/* ============================= */}
                    {/* CONTENT */}
                    {/* ============================= */}

                    <div className="relative z-10 animate-hero-content">

                        {/* TOP LABEL */}
                        <div className="mb-4 flex items-center gap-3">

                            <span
                                className="
                        h-[2px]
                        w-10
                        rounded-full
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        bg-[length:300%_100%]
                        animate-hero-rainbow-line
                    "
                            />

                            <span
                                className="
                        text-[10px]
                        font-bold
                        tracking-[0.2em]
                        text-[#D6B77A]
                        sm:text-xs
                    "
                            >
                                FORM & FUNCTION · 2026
                            </span>

                        </div>


                        {/* HEADING */}
                        <h1
                            className="
                    max-w-3xl
                    text-4xl
                    font-medium
                    leading-[0.95]
                    tracking-tight
                    text-[#F7F1E8]
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                "
                        >
                            Bring colour
                            <br />

                            home with{" "}

                            <span
                                className="
                        relative
                        inline-block
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        bg-[length:300%_100%]
                        bg-clip-text
                        text-transparent
                        animate-hero-rainbow-text
                    "
                            >
                                <i>character.</i>

                                {/* Rainbow underline */}
                                <span
                                    className="
                            absolute
                            -bottom-2
                            left-0
                            h-[3px]
                            w-full
                            rounded-full
                            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:300%_100%]
                            animate-hero-rainbow-line
                        "
                                />
                            </span>
                        </h1>


                        {/* DESCRIPTION */}
                        <p
                            className="
                    mt-5
                    max-w-lg
                    text-sm
                    leading-6
                    text-[#F7F1E8]/70
                    sm:mt-6
                    sm:text-base
                    sm:leading-7
                "
                        >
                            Layer your space with warm woods, sculptural silhouettes and
                            expressive pieces made for everyday living.
                        </p>


                        {/* ============================= */}
                        {/* CTA */}
                        {/* ============================= */}

                        <div className="mt-6 sm:mt-7">

                            <Link
                                to="/shop"
                                className="
                        group
                        relative
                        inline-flex
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-md
                        bg-[#F7F1E8]
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-[#24352F]
                        shadow-lg
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:text-white
                        hover:shadow-2xl
                    "
                            >

                                {/* Rainbow hover background */}
                                <span
                                    className="
                            absolute
                            inset-0
                            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:300%_100%]
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                            animate-hero-rainbow-line
                        "
                                />

                                <span className="relative z-10">
                                    Discover the collection
                                </span>

                                <span
                                    className="
                            relative
                            z-10
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                        "
                                >
                                    ↗
                                </span>

                                {/* Shine */}
                                <span
                                    className="
                            pointer-events-none
                            absolute
                            -left-1/2
                            top-0
                            h-full
                            w-1/3
                            rotate-12
                            bg-white/30
                            opacity-0
                            transition-all
                            duration-700
                            group-hover:left-full
                            group-hover:opacity-100
                        "
                                />

                            </Link>

                        </div>


                        {/* SMALL TEXT */}
                        <div
                            className="
                    mt-6
                    text-[9px]
                    font-semibold
                    tracking-[0.18em]
                    text-[#F7F1E8]/45
                    sm:mt-7
                    sm:text-[10px]
                "
                        >
                            CURATED FOR REAL HOMES · MADE TO LAST
                        </div>

                    </div>

                </div>


                {/* ============================= */}
                {/* HERO IMAGE AREA */}
                {/* ============================= */}

                <div
                    className="
            relative
            z-10
            flex
            min-h-[360px]
            items-center
            justify-center
            overflow-hidden
            bg-[#24352F]
            px-4
            py-6
            sm:min-h-[400px]
            sm:px-7
            sm:py-8
            lg:min-h-[540px]
            lg:px-9
            lg:py-8
            xl:px-12
        "
                >

                    {/* ============================= */}
                    {/* RAINBOW OUTER FRAME */}
                    {/* ============================= */}

                    <div
                        className="
                absolute
                inset-x-4
                top-5
                bottom-5
                rounded-[26px]
                bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
                bg-[length:500%_500%]
                opacity-90
                animate-hero-rainbow-border
                sm:inset-x-7
                sm:top-7
                sm:bottom-7
                lg:inset-x-9
                lg:top-8
                lg:bottom-8
                xl:inset-x-12
            "
                    />

                    {/* Rainbow glow */}
                    <div
                        className="
                pointer-events-none
                absolute
                inset-x-3
                top-4
                bottom-4
                rounded-[30px]
                bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                bg-[length:500%_500%]
                opacity-20
                blur-xl
                animate-hero-rainbow-border
                sm:inset-x-6
                sm:top-6
                sm:bottom-6
                lg:inset-x-8
                lg:top-7
                lg:bottom-7
                xl:inset-x-11
            "
                    />


                    {/* ============================= */}
                    {/* INNER BACKGROUND */}
                    {/* ============================= */}

                    <div
                        className="
                absolute
                inset-x-[21px]
                top-[28px]
                bottom-[28px]
                rounded-[22px]
                bg-[#24352F]
                sm:inset-x-[29px]
                sm:top-[35px]
                sm:bottom-[35px]
                lg:inset-x-[37px]
                lg:top-[36px]
                lg:bottom-[36px]
                xl:inset-x-[49px]
            "
                    />


                    {/* ============================= */}
                    {/* IMAGE FRAME */}
                    {/* ============================= */}

                    <div
                        className="
                group
                relative
                z-10
                h-[290px]
                w-full
                max-w-[500px]
                overflow-hidden
                rounded-[18px]
                border
                border-white/20
                shadow-2xl
                shadow-black/40
                sm:h-[330px]
                lg:h-[430px]
                xl:h-[450px]
            "
                    >

                        <img
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
                            alt="Colourful contemporary living room"
                            className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-105
                "
                        />


                        {/* Rainbow image tint */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(135deg,rgba(255,0,76,0.08),rgba(255,122,0,0.04),rgba(0,207,255,0.08),rgba(155,77,255,0.08))]
                    mix-blend-screen
                    opacity-60
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                "
                        />


                        {/* IMAGE OVERLAY */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#24352F]/70
                    via-[#24352F]/10
                    to-transparent
                "
                        />


                        {/* ============================= */}
                        {/* IMAGE LABEL */}
                        {/* ============================= */}

                        <div
                            className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    flex
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-md
                    border
                    border-white/10
                    bg-[#24352F]/90
                    px-3
                    py-2.5
                    text-[11px]
                    text-[#F7F1E8]
                    backdrop-blur-md
                    sm:bottom-4
                    sm:left-4
                    sm:right-4
                    sm:px-4
                "
                        >

                            {/* Small rainbow indicator */}
                            <span
                                className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-full
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        bg-[length:300%_100%]
                        animate-hero-rainbow-line
                    "
                            />

                            <span className="relative z-10 font-medium">
                                Sunday living edit
                            </span>

                            <b
                                className="
                        relative
                        z-10
                        tracking-widest
                        bg-[linear-gradient(90deg,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff)]
                        bg-clip-text
                        text-transparent
                    "
                            >
                                01 / 04
                            </b>

                        </div>

                    </div>


                    {/* ============================= */}
                    {/* RAINBOW CORNER DOT */}
                    {/* ============================= */}

                    <span
                        className="
                absolute
                left-7
                top-7
                z-20
                h-3
                w-3
                rounded-full
                bg-[linear-gradient(135deg,#ff004c,#ff7a00,#ffe600)]
                shadow-[0_0_0_5px_rgba(255,122,0,0.12),0_0_20px_rgba(255,0,76,0.45)]
                animate-hero-rainbow-dot
                sm:left-10
                sm:top-9
                lg:left-12
            "
                    />


                    {/* ============================= */}
                    {/* RAINBOW CORNER DOT */}
                    {/* ============================= */}

                    <span
                        className="
                absolute
                bottom-7
                right-7
                z-20
                h-3
                w-3
                rounded-full
                bg-[linear-gradient(135deg,#00cfff,#4169ff,#9b4dff)]
                shadow-[0_0_0_5px_rgba(65,105,255,0.12),0_0_20px_rgba(155,77,255,0.45)]
                animate-hero-rainbow-dot-reverse
                sm:right-10
                sm:bottom-9
                lg:right-12
            "
                    />

                </div>


                {/* ============================= */}
                {/* HERO RAINBOW GRADIENT LINE */}
                {/* ============================= */}

                <div
                    className="
            absolute
            bottom-0
            left-0
            z-30
            h-1.5
            w-full
            overflow-hidden
            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
            bg-[length:300%_100%]
            animate-hero-rainbow-line
        "
                >
                    <div
                        className="
                h-full
                w-full
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                animate-hero-shine
            "
                    />
                </div>


                {/* ============================= */}
                {/* ANIMATIONS */}
                {/* ============================= */}

                <style>{`

        /* ================================= */
        /* RAINBOW GLOW */
        /* ================================= */

        @keyframes heroRainbowGlow {

            0%,
            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.3;
            }

            50% {
                transform: translate3d(25px, -20px, 0) scale(1.12);
                opacity: 0.7;
            }

        }

        @keyframes heroRainbowGlowReverse {

            0%,
            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.25;
            }

            50% {
                transform: translate3d(-30px, 20px, 0) scale(1.1);
                opacity: 0.6;
            }

        }

        .animate-hero-rainbow-glow {
            animation: heroRainbowGlow 9s ease-in-out infinite;
        }

        .animate-hero-rainbow-glow-reverse {
            animation: heroRainbowGlowReverse 11s ease-in-out infinite;
        }


        /* ================================= */
        /* RAINBOW ROTATING RING */
        /* ================================= */

        @keyframes heroRainbowSpin {

            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }

        }

        .animate-hero-rainbow-spin {
            animation: heroRainbowSpin 18s linear infinite;
        }


        /* ================================= */
        /* FLOATING DOTS */
        /* ================================= */

        @keyframes heroRainbowDot {

            0%,
            100% {
                transform: translateY(0) scale(1);
                opacity: 0.5;
            }

            50% {
                transform: translateY(-15px) scale(1.35);
                opacity: 1;
            }

        }

        @keyframes heroRainbowDotReverse {

            0%,
            100% {
                transform: translateY(0) scale(1);
                opacity: 0.45;
            }

            50% {
                transform: translateY(14px) scale(1.3);
                opacity: 1;
            }

        }

        .animate-hero-rainbow-dot {
            animation: heroRainbowDot 4s ease-in-out infinite;
        }

        .animate-hero-rainbow-dot-reverse {
            animation: heroRainbowDotReverse 5s ease-in-out infinite;
        }


        /* ================================= */
        /* CONTENT ENTRANCE */
        /* ================================= */

        @keyframes heroContent {

            0% {
                opacity: 0;
                transform: translateY(25px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }

        }

        .animate-hero-content {
            animation: heroContent 0.9s ease-out both;
        }


        /* ================================= */
        /* RAINBOW TEXT */
        /* ================================= */

        @keyframes heroRainbowText {

            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-hero-rainbow-text {
            animation: heroRainbowText 6s ease-in-out infinite;
        }


        /* ================================= */
        /* RAINBOW LINE */
        /* ================================= */

        @keyframes heroRainbowLine {

            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-hero-rainbow-line {
            animation: heroRainbowLine 5s linear infinite;
        }


        /* ================================= */
        /* RAINBOW IMAGE BORDER */
        /* ================================= */

        @keyframes heroRainbowBorder {

            0% {
                background-position: 0% 50%;
            }

            25% {
                background-position: 50% 100%;
            }

            50% {
                background-position: 100% 50%;
            }

            75% {
                background-position: 50% 0%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-hero-rainbow-border {
            animation: heroRainbowBorder 7s ease-in-out infinite;
        }


        /* ================================= */
        /* BOTTOM SHINE */
        /* ================================= */

        @keyframes heroShine {

            0% {
                transform: translateX(-100%);
            }

            100% {
                transform: translateX(100%);
            }

        }

        .animate-hero-shine {
            animation: heroShine 3s ease-in-out infinite;
        }


        /* ================================= */
        /* REDUCED MOTION */
        /* ================================= */

        @media (prefers-reduced-motion: reduce) {

            .animate-hero-rainbow-glow,
            .animate-hero-rainbow-glow-reverse,
            .animate-hero-rainbow-spin,
            .animate-hero-rainbow-dot,
            .animate-hero-rainbow-dot-reverse,
            .animate-hero-content,
            .animate-hero-rainbow-text,
            .animate-hero-rainbow-line,
            .animate-hero-rainbow-border,
            .animate-hero-shine {
                animation: none;
            }

        }

    `}</style>

            </section>
            


            
            {/* COLLECTIONS */}
            <section
                className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F1E8]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
        xl:px-16
    "
            >
                {/* ============================= */}
                {/* BACKGROUND RAINBOW DECORATION */}
                {/* ============================= */}

                {/* Top-right rainbow glow */}
                <div
                    className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[conic-gradient(from_0deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
            opacity-10
            blur-3xl
            animate-room-rainbow-glow
        "
                />

                {/* Bottom-left rainbow glow */}
                <div
                    className="
            pointer-events-none
            absolute
            -bottom-44
            -left-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[conic-gradient(from_180deg,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)]
            opacity-10
            blur-3xl
            animate-room-rainbow-glow-reverse
        "
                />

                {/* Decorative rainbow ring */}
                <div
                    className="
            pointer-events-none
            absolute
            right-[6%]
            top-20
            h-24
            w-24
            rounded-full
            bg-[conic-gradient(from_0deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
            p-[2px]
            opacity-40
            animate-room-rainbow-spin
        "
                >
                    <div className="h-full w-full rounded-full bg-[#F7F1E8]" />
                </div>

                {/* Outer ring */}
                <div
                    className="
            pointer-events-none
            absolute
            right-[4%]
            top-10
            h-48
            w-48
            rounded-full
            border
            border-[#4169ff]/10
        "
                />

                {/* Floating dots */}
                <span
                    className="
            pointer-events-none
            absolute
            left-[6%]
            top-[28%]
            h-3
            w-3
            rounded-full
            bg-[linear-gradient(135deg,#ff004c,#ff7a00)]
            shadow-[0_0_18px_rgba(255,0,76,0.35)]
            animate-room-rainbow-dot
        "
                />

                <span
                    className="
            pointer-events-none
            absolute
            right-[12%]
            bottom-[20%]
            h-2
            w-2
            rounded-full
            bg-[linear-gradient(135deg,#00cfff,#4169ff)]
            shadow-[0_0_18px_rgba(0,207,255,0.35)]
            animate-room-rainbow-dot-reverse
        "
                />


                {/* ============================= */}
                {/* MAIN CONTENT */}
                {/* ============================= */}

                <div className="relative z-10">

                    {/* ============================= */}
                    {/* SECTION HEADER */}
                    {/* ============================= */}

                    <div
                        className="
                mb-10
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-end
                sm:justify-between
                lg:mb-12
                animate-room-header
            "
                    >

                        {/* LEFT CONTENT */}
                        <div>

                            {/* Label */}
                            <div className="flex items-center gap-3">

                                <span
                                    className="
                            h-[2px]
                            w-10
                            rounded-full
                            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:300%_100%]
                            animate-room-rainbow-line
                        "
                                />

                                <span
                                    className="
                            text-xs
                            font-bold
                            tracking-[0.2em]
                            text-[#C47A45]
                        "
                                >
                                    EXPLORE BY ROOM
                                </span>

                            </div>


                            {/* Heading */}
                            <h2
                                className="
                        mt-3
                        max-w-3xl
                        text-3xl
                        font-medium
                        tracking-tight
                        text-[#24352F]
                        sm:text-4xl
                        lg:text-5xl
                        xl:text-6xl
                    "
                            >
                                Give every room

                                <span
                                    className="
                            relative
                            ml-2
                            inline-block
                            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:300%_100%]
                            bg-clip-text
                            text-transparent
                            animate-room-rainbow-text
                        "
                                >
                                    its own mood.

                                    {/* Rainbow underline */}
                                    <span
                                        className="
                                absolute
                                -bottom-3
                                left-0
                                h-[3px]
                                w-full
                                rounded-full
                                bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                                bg-[length:300%_100%]
                                animate-room-rainbow-line
                            "
                                    />
                                </span>
                            </h2>

                        </div>


                        {/* RIGHT LINK */}
                        <Link
                            to="/shop"
                            className="
                    group
                    relative
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border
                    border-[#24352F]/15
                    bg-white/60
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#24352F]
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-transparent
                    hover:bg-[#24352F]
                    hover:text-[#F7F1E8]
                    hover:shadow-xl
                "
                        >

                            {/* Rainbow border */}
                            <span
                                className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        bg-[length:300%_100%]
                        p-[1px]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        animate-room-rainbow-line
                    "
                            >
                                <span className="block h-full w-full rounded-full bg-[#24352F]" />
                            </span>

                            <span className="relative z-10">
                                See every piece
                            </span>

                            <span
                                className="
                        relative
                        z-10
                        text-base
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                    "
                            >
                                ↗
                            </span>

                            {/* Shine */}
                            <span
                                className="
                        pointer-events-none
                        absolute
                        -left-1/2
                        top-0
                        h-full
                        w-1/3
                        rotate-12
                        bg-white/25
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:left-full
                        group-hover:opacity-100
                    "
                            />

                        </Link>

                    </div>


                    {/* ============================= */}
                    {/* ROOM CARDS */}
                    {/* ============================= */}

                    <div
                        className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
            "
                    >

                        {categories.slice(1).map((category, index) => (

                            <div
                                key={category}
                                className={`
                        group
                        relative
                        rounded-[28px]
                        animate-room-card
                        ${index === 0
                                        ? "room-card-1"
                                        : index === 1
                                            ? "room-card-2"
                                            : index === 2
                                                ? "room-card-3"
                                                : "room-card-4"
                                    }
                    `}
                            >

                                {/* ============================= */}
                                {/* RAINBOW BORDER */}
                                {/* ============================= */}

                                <div
                                    className="
                            absolute
                            -inset-[2px]
                            rounded-[28px]
                            bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
                            bg-[length:500%_500%]
                            opacity-80
                            blur-[1px]
                            transition-all
                            duration-500
                            group-hover:opacity-100
                            animate-room-rainbow-border
                        "
                                />

                                {/* Rainbow glow behind card */}
                                <div
                                    className="
                            pointer-events-none
                            absolute
                            -inset-3
                            rounded-[32px]
                            bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:500%_500%]
                            opacity-0
                            blur-xl
                            transition-opacity
                            duration-700
                            group-hover:opacity-25
                            animate-room-rainbow-border
                        "
                                />


                                {/* ============================= */}
                                {/* CARD */}
                                {/* ============================= */}

                                <Link
                                    to="/shop"
                                    className="
                            relative
                            block
                            min-h-[420px]
                            overflow-hidden
                            rounded-[26px]
                            bg-[#24352F]
                            shadow-sm
                            transition-all
                            duration-700
                            group-hover:-translate-y-2
                            group-hover:shadow-2xl
                            group-hover:shadow-[#24352F]/25
                        "
                                >

                                    {/* IMAGE */}
                                    <img
                                        src={pics[category]}
                                        alt={category}
                                        className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-1000
                                ease-out
                                group-hover:scale-110
                            "
                                    />


                                    {/* Rainbow image tint */}
                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-[linear-gradient(135deg,rgba(255,0,76,0.05),rgba(0,207,255,0.08),rgba(155,77,255,0.08))]
                                mix-blend-screen
                                opacity-60
                                transition-opacity
                                duration-700
                                group-hover:opacity-100
                            "
                                    />


                                    {/* DARK IMAGE OVERLAY */}
                                    <div
                                        className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[#16221E]/95
                                via-[#16221E]/30
                                to-[#16221E]/5
                                transition-all
                                duration-700
                                group-hover:from-[#16221E]/90
                                group-hover:via-[#16221E]/20
                            "
                                    />


                                    {/* ============================= */}
                                    {/* TOP NUMBER */}
                                    {/* ============================= */}

                                    <div
                                        className="
                                absolute
                                left-5
                                top-5
                                flex
                                h-10
                                min-w-10
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full
                                border
                                border-white/30
                                bg-[#24352F]/45
                                px-2
                                backdrop-blur-md
                                transition-all
                                duration-500
                                group-hover:border-transparent
                                group-hover:bg-[#24352F]/60
                            "
                                    >

                                        {/* Number rainbow ring */}
                                        <span
                                            className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-[conic-gradient(from_0deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
                                    opacity-0
                                    animate-room-rainbow-spin
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                                        />

                                        <span
                                            className="
                                    relative
                                    z-10
                                    flex
                                    h-[calc(100%-2px)]
                                    w-[calc(100%-2px)]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#24352F]/80
                                    text-[10px]
                                    font-bold
                                    tracking-[0.2em]
                                    text-white
                                "
                                        >
                                            0{index + 1}
                                        </span>

                                    </div>


                                    {/* ============================= */}
                                    {/* CONTENT */}
                                    {/* ============================= */}

                                    <div
                                        className="
                                absolute
                                bottom-0
                                left-0
                                right-0
                                p-6
                                text-white
                                sm:p-7
                            "
                                    >

                                        <h3
                                            className="
                                    text-3xl
                                    font-medium
                                    tracking-tight
                                    transition-all
                                    duration-500
                                    group-hover:-translate-y-1
                                "
                                        >
                                            {category}
                                        </h3>


                                        <div
                                            className="
                                    mt-3
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-medium
                                    text-[#F7F1E8]/80
                                    transition-all
                                    duration-500
                                    group-hover:gap-4
                                    group-hover:text-white
                                "
                                        >

                                            <span>
                                                Browse pieces
                                            </span>

                                            <span
                                                className="
                                        text-base
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-1
                                    "
                                            >
                                                ↗
                                            </span>

                                        </div>


                                        {/* Rainbow content line */}
                                        <div
                                            className="
                                    mt-4
                                    h-[2px]
                                    w-0
                                    rounded-full
                                    bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                                    bg-[length:300%_100%]
                                    transition-all
                                    duration-700
                                    group-hover:w-24
                                    animate-room-rainbow-line
                                "
                                        />

                                    </div>


                                    {/* ============================= */}
                                    {/* HOVER SHINE */}
                                    {/* ============================= */}

                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -left-1/2
                                top-0
                                h-full
                                w-1/3
                                rotate-12
                                bg-gradient-to-r
                                from-transparent
                                via-white/25
                                to-transparent
                                opacity-0
                                transition-all
                                duration-1000
                                group-hover:left-full
                                group-hover:opacity-100
                            "
                                    />

                                </Link>

                            </div>

                        ))}

                    </div>


                    {/* ============================= */}
                    {/* BOTTOM RAINBOW DIVIDER */}
                    {/* ============================= */}

                    <div
                        className="
                mt-10
                flex
                items-center
                justify-center
                gap-3
                sm:mt-12
            "
                    >

                        <span
                            className="
                    h-[2px]
                    flex-1
                    rounded-full
                    bg-[linear-gradient(90deg,transparent,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)]
                    bg-[length:300%_100%]
                    animate-room-rainbow-line
                "
                        />

                        <span
                            className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[linear-gradient(135deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                    shadow-[0_0_16px_rgba(255,47,179,0.4)]
                    animate-room-rainbow-dot
                "
                        />

                        <span
                            className="
                    h-[2px]
                    flex-1
                    rounded-full
                    bg-[linear-gradient(90deg,#00cfff,#4169ff,#9b4dff,#ff2fb3,transparent)]
                    bg-[length:300%_100%]
                    animate-room-rainbow-line
                "
                        />

                    </div>

                </div>


                {/* ============================= */}
                {/* ANIMATIONS */}
                {/* ============================= */}

                <style>{`

        /* ================================= */
        /* BACKGROUND GLOW */
        /* ================================= */

        @keyframes roomRainbowGlow {

            0%,
            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.35;
            }

            50% {
                transform: translate3d(-25px, 25px, 0) scale(1.12);
                opacity: 0.7;
            }

        }

        @keyframes roomRainbowGlowReverse {

            0%,
            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.25;
            }

            50% {
                transform: translate3d(30px, -25px, 0) scale(1.12);
                opacity: 0.6;
            }

        }

        .animate-room-rainbow-glow {
            animation: roomRainbowGlow 9s ease-in-out infinite;
        }

        .animate-room-rainbow-glow-reverse {
            animation: roomRainbowGlowReverse 11s ease-in-out infinite;
        }


        /* ================================= */
        /* RAINBOW ROTATION */
        /* ================================= */

        @keyframes roomRainbowSpin {

            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }

        }

        .animate-room-rainbow-spin {
            animation: roomRainbowSpin 18s linear infinite;
        }


        /* ================================= */
        /* FLOATING DOTS */
        /* ================================= */

        @keyframes roomRainbowDot {

            0%,
            100% {
                transform: translateY(0) scale(1);
                opacity: 0.5;
            }

            50% {
                transform: translateY(-14px) scale(1.3);
                opacity: 1;
            }

        }

        @keyframes roomRainbowDotReverse {

            0%,
            100% {
                transform: translateY(0) scale(1);
                opacity: 0.4;
            }

            50% {
                transform: translateY(12px) scale(1.25);
                opacity: 1;
            }

        }

        .animate-room-rainbow-dot {
            animation: roomRainbowDot 4s ease-in-out infinite;
        }

        .animate-room-rainbow-dot-reverse {
            animation: roomRainbowDotReverse 5s ease-in-out infinite;
        }


        /* ================================= */
        /* HEADER */
        /* ================================= */

        @keyframes roomHeader {

            0% {
                opacity: 0;
                transform: translateY(25px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }

        }

        .animate-room-header {
            animation: roomHeader 0.8s ease-out both;
        }


        /* ================================= */
        /* RAINBOW TEXT */
        /* ================================= */

        @keyframes roomRainbowText {

            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-room-rainbow-text {
            animation: roomRainbowText 6s ease-in-out infinite;
        }


        /* ================================= */
        /* RAINBOW LINE */
        /* ================================= */

        @keyframes roomRainbowLine {

            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-room-rainbow-line {
            animation: roomRainbowLine 5s linear infinite;
        }


        /* ================================= */
        /* CARD ENTRANCE */
        /* ================================= */

        @keyframes roomCard {

            0% {
                opacity: 0;
                transform: translateY(35px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }

        }

        .animate-room-card {
            animation: roomCard 0.8s ease-out both;
        }

        .room-card-1 {
            animation-delay: 0.15s;
        }

        .room-card-2 {
            animation-delay: 0.3s;
        }

        .room-card-3 {
            animation-delay: 0.45s;
        }

        .room-card-4 {
            animation-delay: 0.6s;
        }


        /* ================================= */
        /* RAINBOW CARD BORDER */
        /* ================================= */

        @keyframes roomRainbowBorder {

            0% {
                background-position: 0% 50%;
            }

            25% {
                background-position: 50% 100%;
            }

            50% {
                background-position: 100% 50%;
            }

            75% {
                background-position: 50% 0%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-room-rainbow-border {
            animation: roomRainbowBorder 7s ease-in-out infinite;
        }


        /* ================================= */
        /* REDUCED MOTION */
        /* ================================= */

        @media (prefers-reduced-motion: reduce) {

            .animate-room-rainbow-glow,
            .animate-room-rainbow-glow-reverse,
            .animate-room-rainbow-spin,
            .animate-room-rainbow-dot,
            .animate-room-rainbow-dot-reverse,
            .animate-room-header,
            .animate-room-rainbow-text,
            .animate-room-rainbow-line,
            .animate-room-card,
            .animate-room-rainbow-border {
                animation: none;
            }

        }

    `}</style>

            </section>
            
            {/* COLOUR STORY */}
            
            <section className="relative grid grid-cols-1 overflow-hidden bg-[#24352F] text-[#F7F1E8] lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <div className="relative flex flex-col justify-center overflow-hidden px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">

                    {/* Decorative background circles */}
                    <div
                        className="
                pointer-events-none
                absolute
                -left-24
                -top-24
                h-64
                w-64
                rounded-full
                border
                border-[#D6B77A]/10
                animate-slow-spin
            "
                    />

                    <div
                        className="
                pointer-events-none
                absolute
                -bottom-32
                right-[-80px]
                h-72
                w-72
                rounded-full
                bg-[#C47A45]/10
                blur-3xl
                animate-float
            "
                    />

                    <div className="relative z-10">

                        <span className="text-xs font-semibold tracking-[0.2em] text-[#D6B77A]">
                            THE COLOUR STORY
                        </span>

                        <h2
                            className="
                    mt-4
                    max-w-2xl
                    text-4xl
                    font-medium
                    tracking-tight
                    sm:text-5xl
                    lg:text-5xl
                    xl:text-6xl
                "
                        >
                            Neutrals are only the beginning.
                        </h2>

                        <p className="mt-6 max-w-xl leading-7 text-[#F7F1E8]/70">
                            Terracotta, olive, honey and deep green bring personality to a
                            calm foundation. Build a room that feels collected, not copied.
                        </p>

                        <div className="mt-8">
                            <Link
                                className="
                        group
                        relative
                        inline-flex
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-sm
                        bg-[#F7F1E8]
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-[#24352F]
                        shadow-lg
                        shadow-black/10
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:bg-[#D6B77A]
                        hover:shadow-xl
                    "
                                to="/shop"
                            >
                                <span className="relative z-10">
                                    Shop the edit
                                </span>

                                <span
                                    className="
                            relative
                            z-10
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                >
                                    ↗
                                </span>

                                {/* Button shine */}
                                <span
                                    className="
                            pointer-events-none
                            absolute
                            -left-1/2
                            top-0
                            h-full
                            w-1/3
                            rotate-12
                            bg-white/40
                            opacity-0
                            transition-all
                            duration-700
                            group-hover:left-full
                            group-hover:opacity-100
                        "
                                />
                            </Link>
                        </div>

                        {/* Small colour indicator */}
                        <div className="mt-10 flex items-center gap-3">

                            <span className="h-px w-12 bg-[#D6B77A]/50" />

                            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#F7F1E8]/40">
                                FOUR COLOURS · ONE MOOD
                            </span>

                        </div>

                    </div>
                </div>


                {/* RIGHT COLOUR GRID */}
                <div className="relative grid min-h-[420px] grid-cols-2 overflow-hidden sm:min-h-[500px]">

                    {/* OLIVE */}
                    <div
                        className="
                colour-box
                colour-box-1
                group
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                bg-[#68745B]
            "
                    >
                        {/* Animated gradient */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    -inset-[30%]
                    bg-[conic-gradient(from_0deg,transparent,#D6B77A55,transparent,#24352F44,transparent)]
                    animate-colour-rotate
                "
                        />

                        {/* Decorative ring */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-32
                    w-32
                    rounded-full
                    border
                    border-white/20
                    transition-transform
                    duration-700
                    group-hover:scale-125
                "
                        />

                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-20
                    w-20
                    rounded-full
                    border
                    border-white/10
                    animate-pulse-ring
                "
                        />

                        <span
                            className="
                    relative
                    z-10
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:tracking-[0.3em]
                "
                        >
                            OLIVE
                        </span>

                        {/* Shine */}
                        <div className="colour-shine absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/20" />
                    </div>


                    {/* CLAY */}
                    <div
                        className="
                colour-box
                colour-box-2
                group
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                bg-[#C47A45]
            "
                    >
                        <div
                            className="
                    pointer-events-none
                    absolute
                    -inset-[30%]
                    bg-[conic-gradient(from_180deg,transparent,#D6B77A55,transparent,#24352F44,transparent)]
                    animate-colour-rotate-reverse
                "
                        />

                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-32
                    w-32
                    rounded-full
                    border
                    border-white/20
                    transition-transform
                    duration-700
                    group-hover:scale-125
                "
                        />

                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-20
                    w-20
                    rounded-full
                    border
                    border-white/10
                    animate-pulse-ring
                "
                        />

                        <span
                            className="
                    relative
                    z-10
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:tracking-[0.3em]
                "
                        >
                            CLAY
                        </span>

                        <div className="colour-shine absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/20" />
                    </div>


                    {/* HONEY */}
                    <div
                        className="
                colour-box
                colour-box-3
                group
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                bg-[#D6B77A]
            "
                    >
                        <div
                            className="
                    pointer-events-none
                    absolute
                    -inset-[30%]
                    bg-[conic-gradient(from_90deg,transparent,#F7F1E855,transparent,#C47A4544,transparent)]
                    animate-colour-rotate
                "
                        />

                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-32
                    w-32
                    rounded-full
                    border
                    border-[#24352F]/20
                    transition-transform
                    duration-700
                    group-hover:scale-125
                "
                        />

                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-20
                    w-20
                    rounded-full
                    border
                    border-[#24352F]/10
                    animate-pulse-ring
                "
                        />

                        <span
                            className="
                    relative
                    z-10
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-[#24352F]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:tracking-[0.3em]
                "
                        >
                            HONEY
                        </span>

                        <div className="colour-shine absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/25" />
                    </div>


                    {/* FOREST */}
                    <div
                        className="
                colour-box
                colour-box-4
                group
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                bg-[#24352F]
            "
                    >
                        <div
                            className="
                    pointer-events-none
                    absolute
                    -inset-[30%]
                    bg-[conic-gradient(from_270deg,transparent,#D6B77A44,transparent,#68745B55,transparent)]
                    animate-colour-rotate-reverse
                "
                        />

                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-32
                    w-32
                    rounded-full
                    border
                    border-[#D6B77A]/25
                    transition-transform
                    duration-700
                    group-hover:scale-125
                "
                        />

                        <div
                            className="
                    pointer-events-none
                    absolute
                    h-20
                    w-20
                    rounded-full
                    border
                    border-[#F7F1E8]/10
                    animate-pulse-ring
                "
                        />

                        <span
                            className="
                    relative
                    z-10
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:tracking-[0.3em]
                "
                        >
                            FOREST
                        </span>

                        <div className="colour-shine absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/15" />
                    </div>

                </div>


                {/* ANIMATIONS */}
                <style>{`
        @keyframes colourRotate {
            0% {
                transform: rotate(0deg) scale(1);
            }

            50% {
                transform: rotate(180deg) scale(1.08);
            }

            100% {
                transform: rotate(360deg) scale(1);
            }
        }

        @keyframes colourRotateReverse {
            0% {
                transform: rotate(360deg) scale(1);
            }

            50% {
                transform: rotate(180deg) scale(1.08);
            }

            100% {
                transform: rotate(0deg) scale(1);
            }
        }

        @keyframes colourFloat {
            0%,
            100% {
                transform: translateY(0px);
            }

            50% {
                transform: translateY(-10px);
            }
        }

        @keyframes pulseRing {
            0%,
            100% {
                transform: scale(0.85);
                opacity: 0.3;
            }

            50% {
                transform: scale(1.15);
                opacity: 0.8;
            }
        }

        @keyframes slowSpin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @keyframes colourShine {
            0% {
                left: -60%;
                opacity: 0;
            }

            15% {
                opacity: 1;
            }

            45% {
                opacity: 1;
            }

            60% {
                left: 120%;
                opacity: 0;
            }

            100% {
                left: 120%;
                opacity: 0;
            }
        }

        .animate-colour-rotate {
            animation: colourRotate 12s linear infinite;
        }

        .animate-colour-rotate-reverse {
            animation: colourRotateReverse 14s linear infinite;
        }

        .animate-float {
            animation: colourFloat 6s ease-in-out infinite;
        }

        .animate-pulse-ring {
            animation: pulseRing 4s ease-in-out infinite;
        }

        .animate-slow-spin {
            animation: slowSpin 25s linear infinite;
        }

        .colour-shine {
            animation: colourShine 7s ease-in-out infinite;
        }

        .colour-box-2 .colour-shine {
            animation-delay: 1.5s;
        }

        .colour-box-3 .colour-shine {
            animation-delay: 3s;
        }

        .colour-box-4 .colour-shine {
            animation-delay: 4.5s;
        }

        .colour-box-1 {
            animation: colourFloat 6s ease-in-out infinite;
        }

        .colour-box-2 {
            animation: colourFloat 7s ease-in-out infinite;
            animation-delay: 0.7s;
        }

        .colour-box-3 {
            animation: colourFloat 8s ease-in-out infinite;
            animation-delay: 1.4s;
        }

        .colour-box-4 {
            animation: colourFloat 7.5s ease-in-out infinite;
            animation-delay: 2.1s;
        }

        @media (prefers-reduced-motion: reduce) {
            .animate-colour-rotate,
            .animate-colour-rotate-reverse,
            .animate-float,
            .animate-pulse-ring,
            .animate-slow-spin,
            .colour-shine,
            .colour-box-1,
            .colour-box-2,
            .colour-box-3,
            .colour-box-4 {
                animation: none;
            }
        }
    `}</style>

            </section>
        
            {/* HANDPICKED */}
            
            <section
                className="
        relative
        w-full
        overflow-hidden
        bg-[#EFE5D8]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
        xl:px-16
    "
            >
                {/* ============================= */}
                {/* RAINBOW BACKGROUND DECORATIONS */}
                {/* ============================= */}

                {/* Top-right rainbow glow */}
                <div
                    className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[conic-gradient(from_0deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
            opacity-15
            blur-3xl
            animate-handpicked-rainbow-glow
        "
                />

                {/* Bottom-left rainbow glow */}
                <div
                    className="
            pointer-events-none
            absolute
            -bottom-48
            -left-40
            h-[460px]
            w-[460px]
            rounded-full
            bg-[conic-gradient(from_180deg,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)]
            opacity-10
            blur-3xl
            animate-handpicked-rainbow-glow-reverse
        "
                />

                {/* Large decorative rainbow ring */}
                <div
                    className="
            pointer-events-none
            absolute
            right-[5%]
            top-16
            h-28
            w-28
            rounded-full
            bg-[conic-gradient(from_0deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
            p-[2px]
            opacity-40
            animate-handpicked-rainbow-spin
        "
                >
                    <div className="h-full w-full rounded-full bg-[#EFE5D8]" />
                </div>

                {/* Outer decorative ring */}
                <div
                    className="
            pointer-events-none
            absolute
            right-[7%]
            top-10
            h-56
            w-56
            rounded-full
            border
            border-[#9b4dff]/10
        "
                />

                {/* Floating rainbow dot */}
                <div
                    className="
            pointer-events-none
            absolute
            left-[8%]
            top-[25%]
            h-3
            w-3
            rounded-full
            bg-[linear-gradient(135deg,#ff004c,#9b4dff)]
            shadow-[0_0_20px_rgba(155,77,255,0.35)]
            animate-handpicked-rainbow-dot
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            right-[15%]
            bottom-[18%]
            h-2
            w-2
            rounded-full
            bg-[linear-gradient(135deg,#00cfff,#35d07f)]
            shadow-[0_0_18px_rgba(0,207,255,0.4)]
            animate-handpicked-rainbow-dot-reverse
        "
                />

                {/* ============================= */}
                {/* MAIN CONTENT */}
                {/* ============================= */}

                <div className="relative z-10">

                    {/* ============================= */}
                    {/* SECTION HEADER */}
                    {/* ============================= */}

                    <div
                        className="
                mb-10
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-end
                sm:justify-between
                lg:mb-12
            "
                    >

                        {/* LEFT */}
                        <div className="animate-handpicked-header">

                            {/* Section label */}
                            <div className="flex items-center gap-3">

                                <span
                                    className="
                            h-[2px]
                            w-10
                            rounded-full
                            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:300%_100%]
                            animate-handpicked-rainbow-line
                            transition-all
                            duration-500
                            hover:w-16
                        "
                                />

                                <span
                                    className="
                            text-xs
                            font-bold
                            tracking-[0.2em]
                            text-[#C47A45]
                        "
                                >
                                    HANDPICKED
                                </span>

                            </div>

                            {/* Heading */}
                            <h2
                                className="
                        mt-3
                        max-w-3xl
                        text-3xl
                        font-medium
                        tracking-tight
                        text-[#24352F]
                        sm:text-4xl
                        lg:text-5xl
                        xl:text-6xl
                    "
                            >
                                Pieces worth

                                <span
                                    className="
                            relative
                            ml-2
                            inline-block
                            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:300%_100%]
                            bg-clip-text
                            text-transparent
                            animate-handpicked-rainbow-text
                        "
                                >
                                    coming home to.

                                    {/* Rainbow underline */}
                                    <span
                                        className="
                                absolute
                                -bottom-3
                                left-0
                                h-[3px]
                                w-full
                                origin-left
                                rounded-full
                                bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                                bg-[length:300%_100%]
                                animate-handpicked-rainbow-line
                            "
                                    />
                                </span>
                            </h2>

                        </div>


                        {/* ============================= */}
                        {/* VIEW COLLECTION BUTTON */}
                        {/* ============================= */}

                        <Link
                            to="/shop"
                            className="
                    group
                    relative
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border
                    border-[#24352F]/15
                    bg-[#F7F1E8]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#24352F]
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-transparent
                    hover:bg-[#24352F]
                    hover:text-[#F7F1E8]
                    hover:shadow-xl
                "
                        >

                            {/* Rainbow hover border */}
                            <span
                                className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
                        bg-[length:300%_100%]
                        p-[1px]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        animate-handpicked-rainbow-line
                    "
                            >
                                <span className="block h-full w-full rounded-full bg-[#24352F]" />
                            </span>

                            <span className="relative z-10">
                                View collection
                            </span>

                            <span
                                className="
                        relative
                        z-10
                        text-base
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                    "
                            >
                                ↗
                            </span>

                            {/* Button shine */}
                            <span
                                className="
                        pointer-events-none
                        absolute
                        -left-1/2
                        top-0
                        h-full
                        w-1/3
                        rotate-12
                        bg-white/25
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:left-full
                        group-hover:opacity-100
                    "
                            />

                        </Link>

                    </div>


                    {/* ============================= */}
                    {/* PRODUCT GRID */}
                    {/* ============================= */}

                    <div className="relative">

                        {/* Rainbow moving top line */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    -top-3
                    left-0
                    h-[2px]
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-[#24352F]/10
                "
                        >
                            <div
                                className="
                        h-full
                        w-1/4
                        rounded-full
                        bg-[linear-gradient(90deg,transparent,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,transparent)]
                        bg-[length:300%_100%]
                        animate-product-line
                    "
                            />
                        </div>


                        <div
                            className="
                    grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-4
                    lg:gap-5
                "
                        >

                            {(Array.isArray(products) ? products : [])
                                .slice(0, 4)
                                .map((product, index) => (

                                <div
                                    key={product.id}
                                    className={`
                            group
                            relative
                            animate-handpicked-card
                            ${index === 0
                                            ? "handpicked-card-1"
                                            : index === 1
                                                ? "handpicked-card-2"
                                                : index === 2
                                                    ? "handpicked-card-3"
                                                    : "handpicked-card-4"
                                        }
                        `}
                                >

                                    {/* ============================= */}
                                    {/* RAINBOW CARD BORDER */}
                                    {/* ============================= */}

                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -inset-[2px]
                                rounded-[25px]
                                bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
                                bg-[length:500%_500%]
                                opacity-0
                                blur-[1px]
                                transition-all
                                duration-500
                                group-hover:opacity-100
                                animate-handpicked-rainbow-border
                            "
                                    />

                                    {/* Rainbow glow */}
                                    <div
                                        className="
                                pointer-events-none
                                absolute
                                -inset-3
                                rounded-[30px]
                                bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                                bg-[length:500%_500%]
                                opacity-0
                                blur-xl
                                transition-opacity
                                duration-700
                                group-hover:opacity-20
                                animate-handpicked-rainbow-border
                            "
                                    />

                                    {/* Product card */}
                                    <div
                                        className="
                                relative
                                z-10
                                transition-all
                                duration-500
                                group-hover:-translate-y-2
                            "
                                    >
                                        <ProductCard product={product} />
                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* ============================= */}
                        {/* BOTTOM RAINBOW DIVIDER */}
                        {/* ============================= */}

                        <div
                            className="
                    pointer-events-none
                    mt-8
                    flex
                    items-center
                    justify-center
                    gap-3
                    sm:mt-10
                "
                        >

                            <span
                                className="
                        h-[2px]
                        flex-1
                        rounded-full
                        bg-[linear-gradient(90deg,transparent,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)]
                        bg-[length:300%_100%]
                        animate-handpicked-rainbow-line
                    "
                            />

                            <span
                                className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[linear-gradient(135deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        shadow-[0_0_15px_rgba(255,47,179,0.35)]
                        animate-handpicked-rainbow-dot
                    "
                            />

                            <span
                                className="
                        h-[2px]
                        flex-1
                        rounded-full
                        bg-[linear-gradient(90deg,#00cfff,#4169ff,#9b4dff,#ff2fb3,transparent)]
                        bg-[length:300%_100%]
                        animate-handpicked-rainbow-line
                    "
                            />

                        </div>

                    </div>

                </div>


                {/* ============================= */}
                {/* ANIMATIONS */}
                {/* ============================= */}

                <style>{`

        /* ================================= */
        /* RAINBOW BACKGROUND GLOW */
        /* ================================= */

        @keyframes handpickedRainbowGlow {

            0%,
            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.35;
            }

            50% {
                transform: translate3d(-25px, 25px, 0) scale(1.12);
                opacity: 0.7;
            }

        }

        @keyframes handpickedRainbowGlowReverse {

            0%,
            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.25;
            }

            50% {
                transform: translate3d(30px, -25px, 0) scale(1.12);
                opacity: 0.6;
            }

        }

        .animate-handpicked-rainbow-glow {
            animation: handpickedRainbowGlow 9s ease-in-out infinite;
        }

        .animate-handpicked-rainbow-glow-reverse {
            animation: handpickedRainbowGlowReverse 11s ease-in-out infinite;
        }


        /* ================================= */
        /* RAINBOW RING */
        /* ================================= */

        @keyframes handpickedRainbowSpin {

            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }

        }

        .animate-handpicked-rainbow-spin {
            animation: handpickedRainbowSpin 18s linear infinite;
        }


        /* ================================= */
        /* FLOATING DOT */
        /* ================================= */

        @keyframes handpickedRainbowDot {

            0%,
            100% {
                transform: translateY(0) scale(1);
                opacity: 0.5;
            }

            50% {
                transform: translateY(-15px) scale(1.3);
                opacity: 1;
            }

        }

        @keyframes handpickedRainbowDotReverse {

            0%,
            100% {
                transform: translateY(0) scale(1);
                opacity: 0.4;
            }

            50% {
                transform: translateY(12px) scale(1.25);
                opacity: 1;
            }

        }

        .animate-handpicked-rainbow-dot {
            animation: handpickedRainbowDot 4s ease-in-out infinite;
        }

        .animate-handpicked-rainbow-dot-reverse {
            animation: handpickedRainbowDotReverse 5s ease-in-out infinite;
        }


        /* ================================= */
        /* HEADER ENTRANCE */
        /* ================================= */

        @keyframes handpickedHeader {

            0% {
                opacity: 0;
                transform: translateY(25px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }

        }

        .animate-handpicked-header {
            animation: handpickedHeader 0.8s ease-out both;
        }


        /* ================================= */
        /* RAINBOW TEXT */
        /* ================================= */

        @keyframes handpickedRainbowText {

            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-handpicked-rainbow-text {
            animation: handpickedRainbowText 6s ease-in-out infinite;
        }


        /* ================================= */
        /* RAINBOW LINE */
        /* ================================= */

        @keyframes handpickedRainbowLine {

            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-handpicked-rainbow-line {
            animation: handpickedRainbowLine 5s linear infinite;
        }


        /* ================================= */
        /* PRODUCT ENTRANCE */
        /* ================================= */

        @keyframes handpickedCard {

            0% {
                opacity: 0;
                transform: translateY(35px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }

        }

        .animate-handpicked-card {
            animation: handpickedCard 0.8s ease-out both;
        }

        .handpicked-card-1 {
            animation-delay: 0.15s;
        }

        .handpicked-card-2 {
            animation-delay: 0.3s;
        }

        .handpicked-card-3 {
            animation-delay: 0.45s;
        }

        .handpicked-card-4 {
            animation-delay: 0.6s;
        }


        /* ================================= */
        /* RAINBOW CARD BORDER */
        /* ================================= */

        @keyframes handpickedRainbowBorder {

            0% {
                background-position: 0% 50%;
            }

            25% {
                background-position: 50% 100%;
            }

            50% {
                background-position: 100% 50%;
            }

            75% {
                background-position: 50% 0%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-handpicked-rainbow-border {
            animation: handpickedRainbowBorder 7s ease-in-out infinite;
        }


        /* ================================= */
        /* MOVING PRODUCT LINE */
        /* ================================= */

        @keyframes productLine {

            0% {
                transform: translateX(-130%);
            }

            100% {
                transform: translateX(520%);
            }

        }

        .animate-product-line {
            animation: productLine 5s ease-in-out infinite;
        }


        /* ================================= */
        /* REDUCED MOTION */
        /* ================================= */

        @media (prefers-reduced-motion: reduce) {

            .animate-handpicked-rainbow-glow,
            .animate-handpicked-rainbow-glow-reverse,
            .animate-handpicked-rainbow-spin,
            .animate-handpicked-rainbow-dot,
            .animate-handpicked-rainbow-dot-reverse,
            .animate-handpicked-header,
            .animate-handpicked-rainbow-text,
            .animate-handpicked-rainbow-line,
            .animate-handpicked-card,
            .animate-handpicked-rainbow-border,
            .animate-product-line {
                animation: none;
            }

        }

    `}</style>

            </section>
            

           

        
            {/* PROMO */}
            
            {/* DESIGN NOTES */}
            
            <section
                className="
        relative
        grid
        grid-cols-1
        overflow-hidden
        bg-[#E1D5C5]
        lg:grid-cols-2
    "
            >
                {/* ============================= */}
                {/* IMAGE SIDE */}
                {/* ============================= */}

                <div
                    className="
            group
            relative
            min-h-[400px]
            overflow-hidden
            bg-[#24352F]
            p-4
            sm:p-6
            lg:min-h-[560px]
            lg:p-8
        "
                >
                    {/* RAINBOW ANIMATED OUTER BORDER */}
                    <div
                        className="
                pointer-events-none
                absolute
                inset-3
                rounded-[30px]
                bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)]
                bg-[length:500%_500%]
                animate-rainbow-border
                sm:inset-5
                lg:inset-7
            "
                    />

                    {/* Rainbow glow behind frame */}
                    <div
                        className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,76,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(0,207,255,0.15),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(155,77,255,0.18),transparent_35%)]
                animate-rainbow-glow
            "
                    />

                    {/* Inner background */}
                    <div
                        className="
                absolute
                inset-[17px]
                rounded-[26px]
                bg-[#24352F]
                sm:inset-[25px]
                lg:inset-[33px]
            "
                    />

                    {/* IMAGE FRAME */}
                    <div
                        className="
                relative
                z-10
                h-full
                min-h-[368px]
                overflow-hidden
                rounded-[22px]
                border
                border-white/20
                shadow-2xl
                shadow-black/30
                sm:min-h-[448px]
                lg:min-h-[494px]
            "
                    >
                        <img
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
                            alt="Warm layered interior"
                            className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-110
                "
                        />

                        {/* Rainbow image overlay */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(135deg,rgba(255,0,76,0.12),transparent_30%,rgba(0,207,255,0.10)_55%,rgba(155,77,255,0.15))]
                    opacity-70
                    mix-blend-screen
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                "
                        />

                        {/* Dark readability overlay */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#24352F]/70
                    via-transparent
                    to-transparent
                "
                        />

                        {/* Moving rainbow shine */}
                        <div
                            className="
                    pointer-events-none
                    absolute
                    -left-1/2
                    top-0
                    z-20
                    h-full
                    w-1/3
                    rotate-12
                    bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)]
                    animate-rainbow-shine
                "
                        />

                        {/* IMAGE LABEL */}
                        <div
                            className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    z-30
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/20
                    bg-[#24352F]/85
                    px-4
                    py-3
                    text-xs
                    text-[#F7F1E8]
                    backdrop-blur-md
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                "
                        >
                            <span className="font-medium">
                                Warm layered interior
                            </span>

                            <span className="tracking-[0.18em] text-[#D6B77A]">
                                01 / 01
                            </span>
                        </div>
                    </div>

                    {/* RAINBOW DECORATIVE DOTS */}

                    <span
                        className="
                absolute
                left-6
                top-6
                z-30
                h-3
                w-3
                rounded-full
                bg-[#ff004c]
                shadow-[0_0_0_7px_rgba(255,0,76,0.15),0_0_25px_rgba(255,0,76,0.6)]
                animate-rainbow-dot
                sm:left-9
                sm:top-9
                lg:left-11
                lg:top-11
            "
                    />

                    <span
                        className="
                absolute
                bottom-6
                right-6
                z-30
                h-3
                w-3
                rounded-full
                bg-[#00cfff]
                shadow-[0_0_0_7px_rgba(0,207,255,0.15),0_0_25px_rgba(0,207,255,0.6)]
                animate-rainbow-dot-reverse
                sm:right-9
                sm:bottom-9
                lg:right-11
                lg:bottom-11
            "
                    />

                    {/* Floating rainbow ring */}
                    <div
                        className="
                pointer-events-none
                absolute
                right-10
                top-10
                z-20
                h-20
                w-20
                rounded-full
                border-2
                border-transparent
                bg-[linear-gradient(#24352F,#24352F)_padding-box,linear-gradient(120deg,#ff004c,#ffe600,#00cfff,#9b4dff,#ff2fb3)_border-box]
                animate-rainbow-ring
                sm:right-14
                sm:top-14
            "
                    />
                </div>


                {/* ============================= */}
                {/* CONTENT SIDE */}
                {/* ============================= */}

                <div
                    className="
            relative
            flex
            flex-col
            justify-center
            overflow-hidden
            bg-[#E1D5C5]
            px-6
            py-16
            sm:px-10
            lg:px-14
            lg:py-20
            xl:px-20
        "
                >
                    {/* RAINBOW BACKGROUND GLOWS */}

                    <div
                        className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-96
                w-96
                rounded-full
                bg-[radial-gradient(circle,#ff7a0030,transparent_65%)]
                blur-3xl
                animate-rainbow-content-glow
            "
                    />

                    <div
                        className="
                pointer-events-none
                absolute
                -bottom-40
                -left-32
                h-96
                w-96
                rounded-full
                bg-[radial-gradient(circle,#4169ff25,transparent_65%)]
                blur-3xl
                animate-rainbow-content-glow-reverse
            "
                    />

                    {/* Decorative rainbow ring */}
                    <div
                        className="
                pointer-events-none
                absolute
                right-8
                top-12
                h-36
                w-36
                rounded-full
                border-2
                border-transparent
                bg-[linear-gradient(#E1D5C5,#E1D5C5)_padding-box,linear-gradient(120deg,#ff004c,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)_border-box]
                opacity-40
                animate-rainbow-ring
            "
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 animate-design-content">

                        {/* Section label */}
                        <div className="flex items-center gap-3">

                            <span
                                className="
                        h-[3px]
                        w-12
                        rounded-full
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        bg-[length:300%_100%]
                        animate-rainbow-line
                    "
                            />

                            <span
                                className="
                        text-xs
                        font-semibold
                        tracking-[0.2em]
                        text-[#C47A45]
                    "
                            >
                                DESIGN NOTES
                            </span>

                        </div>


                        {/* Heading */}
                        <h2
                            className="
                    mt-4
                    text-4xl
                    font-medium
                    leading-tight
                    tracking-tight
                    text-[#24352F]
                    sm:text-5xl
                    lg:text-5xl
                    xl:text-6xl
                "
                        >
                            Make the everyday
                            <br />

                            <i
                                className="
                        relative
                        inline-block
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#d6b77a,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        bg-[length:300%_100%]
                        bg-clip-text
                        text-transparent
                        animate-rainbow-text
                    "
                            >
                                feel special.

                                <span
                                    className="
                            absolute
                            -bottom-2
                            left-0
                            h-[3px]
                            w-full
                            rounded-full
                            bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                            bg-[length:300%_100%]
                            animate-rainbow-line
                        "
                                />
                            </i>
                        </h2>


                        {/* Description */}
                        <p
                            className="
                    mt-6
                    max-w-xl
                    leading-7
                    text-[#24352F]/70
                "
                        >
                            Mix practical forms with one unexpected piece. That is where your
                            room starts to feel like yours.
                        </p>


                        {/* RAINBOW COLOUR DOTS */}
                        <div className="mt-7 flex items-center gap-2">

                            <span className="h-3 w-3 rounded-full bg-[#ff004c] shadow-[0_0_10px_rgba(255,0,76,0.4)]" />

                            <span className="h-3 w-3 rounded-full bg-[#ff7a00] shadow-[0_0_10px_rgba(255,122,0,0.4)]" />

                            <span className="h-3 w-3 rounded-full bg-[#ffe600] shadow-[0_0_10px_rgba(255,230,0,0.4)]" />

                            <span className="h-3 w-3 rounded-full bg-[#35d07f] shadow-[0_0_10px_rgba(53,208,127,0.4)]" />

                            <span className="h-3 w-3 rounded-full bg-[#00cfff] shadow-[0_0_10px_rgba(0,207,255,0.4)]" />

                            <span className="h-3 w-3 rounded-full bg-[#4169ff] shadow-[0_0_10px_rgba(65,105,255,0.4)]" />

                            <span className="h-3 w-3 rounded-full bg-[#9b4dff] shadow-[0_0_10px_rgba(155,77,255,0.4)]" />

                            <span className="h-3 w-3 rounded-full bg-[#ff2fb3] shadow-[0_0_10px_rgba(255,47,179,0.4)]" />

                            <span className="ml-2 text-[9px] font-semibold tracking-[0.18em] text-[#24352F]/40">
                                COLOUR · FORM · CHARACTER
                            </span>

                        </div>


                        {/* BUTTON */}
                        <div className="mt-8">

                            <Link
                                className="
                        group
                        relative
                        inline-flex
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-md
                        bg-[#24352F]
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-[#F7F1E8]
                        shadow-lg
                        shadow-[#24352F]/20
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:shadow-2xl
                    "
                                to="/contact"
                            >
                                <span className="relative z-10">
                                    Talk to our team
                                </span>

                                <span
                                    className="
                            relative
                            z-10
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                >
                                    ↗
                                </span>

                                {/* Rainbow button shine */}
                                <span
                                    className="
                            pointer-events-none
                            absolute
                            -left-1/2
                            top-0
                            h-full
                            w-1/3
                            rotate-12
                            bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]
                            opacity-0
                            transition-all
                            duration-700
                            group-hover:left-full
                            group-hover:opacity-100
                        "
                                />

                            </Link>

                        </div>


                        {/* Bottom information */}
                        <div className="mt-8 flex items-center gap-3">

                            <span
                                className="
                        h-[2px]
                        w-12
                        rounded-full
                        bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)]
                        bg-[length:300%_100%]
                        animate-rainbow-line
                    "
                            />

                            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#24352F]/40">
                                DESIGNED FOR REAL LIVING
                            </span>

                        </div>

                    </div>
                </div>


                {/* ============================= */}
                {/* RAINBOW ANIMATIONS */}
                {/* ============================= */}

                <style>{`

        /* -------------------------------- */
        /* Main rainbow border */
        /* -------------------------------- */

        @keyframes rainbowBorder {

            0% {
                background-position: 0% 50%;
            }

            25% {
                background-position: 50% 100%;
            }

            50% {
                background-position: 100% 50%;
            }

            75% {
                background-position: 50% 0%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-rainbow-border {
            animation: rainbowBorder 8s linear infinite;
        }


        /* -------------------------------- */
        /* Rainbow glow */
        /* -------------------------------- */

        @keyframes rainbowGlow {

            0%,
            100% {
                transform: scale(1) rotate(0deg);
                opacity: 0.7;
            }

            50% {
                transform: scale(1.12) rotate(180deg);
                opacity: 1;
            }

        }

        .animate-rainbow-glow {
            animation: rainbowGlow 12s ease-in-out infinite;
        }


        /* -------------------------------- */
        /* Image shine */
        /* -------------------------------- */

        @keyframes rainbowShine {

            0% {
                left: -60%;
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            45% {
                opacity: 1;
            }

            65% {
                left: 120%;
                opacity: 0;
            }

            100% {
                left: 120%;
                opacity: 0;
            }

        }

        .animate-rainbow-shine {
            animation: rainbowShine 6s ease-in-out infinite;
        }


        /* -------------------------------- */
        /* Decorative dots */
        /* -------------------------------- */

        @keyframes rainbowDot {

            0%,
            100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.5);
            }

        }

        .animate-rainbow-dot {
            animation: rainbowDot 3s ease-in-out infinite;
        }

        .animate-rainbow-dot-reverse {
            animation: rainbowDot 3s ease-in-out 1.5s infinite;
        }


        /* -------------------------------- */
        /* Rainbow ring */
        /* -------------------------------- */

        @keyframes rainbowRing {

            0% {
                transform: rotate(0deg) scale(1);
            }

            50% {
                transform: rotate(180deg) scale(1.08);
            }

            100% {
                transform: rotate(360deg) scale(1);
            }

        }

        .animate-rainbow-ring {
            animation: rainbowRing 12s linear infinite;
        }


        /* -------------------------------- */
        /* Content glow */
        /* -------------------------------- */

        @keyframes rainbowContentGlow {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            50% {
                transform: translate(-20px, 15px) scale(1.15);
            }

        }

        .animate-rainbow-content-glow {
            animation: rainbowContentGlow 9s ease-in-out infinite;
        }

        .animate-rainbow-content-glow-reverse {
            animation: rainbowContentGlow 11s ease-in-out infinite reverse;
        }


        /* -------------------------------- */
        /* Rainbow text */
        /* -------------------------------- */

        @keyframes rainbowText {

            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }

        }

        .animate-rainbow-text {
            animation: rainbowText 7s ease infinite;
        }


        /* -------------------------------- */
        /* Rainbow lines */
        /* -------------------------------- */

        .animate-rainbow-line {
            animation: rainbowText 5s linear infinite;
        }


        /* -------------------------------- */
        /* Content entrance */
        /* -------------------------------- */

        @keyframes designContent {

            0% {
                opacity: 0;
                transform: translateX(35px);
            }

            100% {
                opacity: 1;
                transform: translateX(0);
            }

        }

        .animate-design-content {
            animation: designContent 0.9s ease-out both;
        }


        /* -------------------------------- */
        /* Reduced motion */
        /* -------------------------------- */

        @media (prefers-reduced-motion: reduce) {

            .animate-rainbow-border,
            .animate-rainbow-glow,
            .animate-rainbow-shine,
            .animate-rainbow-dot,
            .animate-rainbow-dot-reverse,
            .animate-rainbow-ring,
            .animate-rainbow-content-glow,
            .animate-rainbow-content-glow-reverse,
            .animate-rainbow-text,
            .animate-rainbow-line,
            .animate-design-content {
                animation: none;
            }

        }

    `}</style>
            </section>
            



            {/* NEWSLETTER */}
            <section className="flex flex-col items-center bg-[#F7F1E8] px-5 py-20 text-center sm:py-24">

                <span className="text-xs font-semibold tracking-[0.2em] text-[#D6B77A]">
                    FROM THE SHOWROOM
                </span>

                <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                    Fresh pieces. Better spaces.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-[#24352F]/70">
                    Visit us in Coimbatore or explore the latest collection online.
                </p>

                <Link
                    to="/contact"
                    className="
                        mt-8 inline-flex items-center gap-3
                        bg-[#C47A45]
                        px-6 py-3.5
                        text-sm font-semibold text-white
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:bg-[#24352F]
                    "
                >
                    Plan a visit ↗
                </Link>

            </section>

            {/* BOTTOM LOOP LINE */}
            <section className="w-full overflow-hidden border-y border-[#F7F1E8]/10 bg-[#24352F] py-4">

                <div className="furniture-marquee flex w-max">

                    <div className="marquee-group flex shrink-0 items-center">

                        {marqueeItems.map((item, index) => (
                            <React.Fragment key={`first-${index}`}>

                                <span className="mx-6 whitespace-nowrap text-xs font-semibold tracking-[0.2em] text-[#F7F1E8] sm:mx-8">
                                    {item}
                                </span>

                                <span className="text-[#D6B77A]">
                                    ✦
                                </span>

                            </React.Fragment>
                        ))}

                    </div>

                    <div className="marquee-group flex shrink-0 items-center">

                        {marqueeItems.map((item, index) => (
                            <React.Fragment key={`second-${index}`}>

                                <span className="mx-6 whitespace-nowrap text-xs font-semibold tracking-[0.2em] text-[#F7F1E8] sm:mx-8">
                                    {item}
                                </span>

                                <span className="text-[#D6B77A]">
                                    ✦
                                </span>

                            </React.Fragment>
                        ))}

                    </div>

                </div>

            </section>

            {/* ANIMATIONS */}
            <style>{`

                @keyframes gradientMove {
                    0% {
                        background-position: 0% 50%;
                    }

                    50% {
                        background-position: 100% 50%;
                    }

                    100% {
                        background-position: 0% 50%;
                    }
                }

                .animate-gradient {
                    animation: gradientMove 6s ease infinite;
                }

                @keyframes furnitureMarquee {
                    0% {
                        transform: translateX(0);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }

                .furniture-marquee {
                    animation: furnitureMarquee 25s linear infinite;
                    will-change: transform;
                }

                .furniture-marquee:hover {
                    animation-play-state: paused;
                }

                .marquee-group {
                    width: max-content;
                }

            `}</style>

        </main>
    );
}