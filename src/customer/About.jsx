
import React from "react";
import { Link } from "react-router-dom";

function About() {
    const values = [
        {
            number: "01",
            title: "Thoughtful Design",
            description:
                "Every piece is selected with attention to detail, proportions, materials, and timeless style.",
        },
        {
            number: "02",
            title: "Everyday Comfort",
            description:
                "We believe beautiful furniture should feel just as good as it looks in your everyday life.",
        },
        {
            number: "03",
            title: "Quality & Craft",
            description:
                "We focus on furniture that brings lasting character, functionality, and warmth to your space.",
        },
    ];

    return (
        <main className="overflow-hidden bg-[#F5F1E9] text-[#253237]">

            {/* ================= ABOUT HERO ================= */}
            <section
                className="
        forma-animated-border
        relative isolate flex min-h-[440px] items-center
        overflow-hidden bg-[#24352F]
        px-5 py-16 text-center
        sm:min-h-[500px] sm:px-8 sm:py-20
        md:min-h-[580px] md:py-28
    "
            >
                {/* Background video */}
                <video
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 -z-10 bg-[#17231F]/65" />

                {/* Decorative gradients */}
                <div
                    className="
            pointer-events-none absolute -right-20 -top-20
            h-64 w-64 rounded-full bg-[#C47A45]/20
            blur-3xl sm:h-96 sm:w-96
        "
                />

                <div
                    className="
            pointer-events-none absolute -bottom-24 -left-20
            h-64 w-64 rounded-full bg-[#D6B77A]/10
            blur-3xl sm:h-96 sm:w-96
        "
                />

                <div
                    className="
            relative mx-auto max-w-5xl
            animate-[fadeInUp_0.8s_ease-out]
        "
                >
                    <p
                        className="
                mb-5 text-xs font-semibold uppercase
                tracking-[0.3em] text-[#D6B77A]
                sm:text-sm sm:tracking-[0.4em]
            "
                    >
                        The FORMA Story
                    </p>

                    <h1
                        className="
                mb-6 text-4xl font-bold leading-tight
                text-[#F7F1E8]
                sm:text-5xl md:text-6xl lg:text-7xl
            "
                    >
                        Furniture with character.
                        <br className="hidden sm:block" />

                        <span className="text-[#D6B77A]">
                            {" "}Comfort for everyday life.
                        </span>
                    </h1>

                    <p
                        className="
                mx-auto max-w-2xl text-sm leading-7
                text-[#F7F1E8]/90
                sm:text-base sm:leading-8 md:text-lg
            "
                    >
                        At FORMA Furniture, we believe your home
                        should reflect your personality. We curate
                        thoughtfully designed furniture that brings
                        comfort, warmth, and character to the spaces
                        where life happens.
                    </p>

                    <div
                        className="
                mt-9 flex flex-col items-center
                justify-center gap-4 sm:flex-row
            "
                    >
                        <Link
                            to="/shop"
                            className="
                    inline-flex w-full max-w-xs
                    items-center justify-center
                    rounded-full bg-[#D6B77A]
                    px-8 py-3.5 text-sm font-bold
                    text-[#24352F] shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#E7D9C5]
                    hover:shadow-xl sm:w-auto
                "
                        >
                            Explore Our Collection
                        </Link>

                        <Link
                            to="/contact"
                            className="
                    inline-flex w-full max-w-xs
                    items-center justify-center
                    rounded-full border
                    border-[#F7F1E8]/50
                    px-8 py-3.5 text-sm font-semibold
                    text-[#F7F1E8]
                    transition-all duration-300
                    hover:border-[#D6B77A]
                    hover:bg-[#F7F1E8]/10 sm:w-auto
                "
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= OUR STORY ================= */}
            <section
                className="
                    forma-animated-border
                    px-5 py-14 sm:px-8 sm:py-20 lg:py-28
                "
            >
                <div
                    className="
                        mx-auto grid max-w-7xl
                        items-center gap-10
                        lg:grid-cols-2 lg:gap-16
                    "
                >
                    <div>
                        <p
                            className="
                                mb-4 text-xs font-bold uppercase
                                tracking-[0.3em] text-[#C47A45]
                                sm:text-sm
                            "
                        >
                            More Than Furniture
                        </p>

                        <h2
                            className="
                                mb-6 text-3xl font-bold
                                leading-tight text-[#24352F]
                                sm:text-4xl md:text-5xl
                            "
                        >
                            Creating spaces
                            <br className="hidden sm:block" />
                            that feel like home.
                        </h2>

                        <p
                            className="
                                mb-5 text-sm leading-7
                                text-[#5C6B73]
                                sm:text-base sm:leading-8
                            "
                        >
                            Your home is more than a place.
                            It is where you relax, connect, celebrate,
                            and create memories. We believe the
                            furniture around you should make those
                            moments even more meaningful.
                        </p>

                        <p
                            className="
                                text-sm leading-7 text-[#5C6B73]
                                sm:text-base sm:leading-8
                            "
                        >
                            FORMA Furniture brings together thoughtful
                            designs, inviting textures, and practical
                            functionality to help you create spaces
                            that reflect your personality and the way
                            you love to live.
                        </p>

                        <div
                            className="
                                mt-8 h-1 w-20 rounded-full
                                bg-[#C47A45]
                            "
                        />
                    </div>

                    {/* Story Image Panel */}
                    <div
                        className="
                            relative mx-auto w-full max-w-xl
                            lg:max-w-none
                        "
                    >
                        <div
                            className="
                                absolute -right-3 -top-3
                                h-full w-full rounded-3xl
                                border-2 border-[#D6B77A]/60
                                sm:-right-5 sm:-top-5
                            "
                        />

                        <div
                            className="
                                relative flex min-h-[280px]
                                items-center justify-center
                                overflow-hidden rounded-3xl
                                bg-gradient-to-br
                                from-[#D6B77A]/40
                                via-[#C47A45]/20
                                to-[#24352F]/10
                                p-8 shadow-xl
                                sm:min-h-[380px] sm:p-12
                                md:min-h-[440px]
                            "
                        >
                            <div className="text-center">
                                <img
                                    src="/logo.png"
                                    alt="FORMA Furniture"
                                    className="
                                        mx-auto mb-6 h-20 w-20
                                        object-contain
                                        sm:h-28 sm:w-28
                                    "
                                />

                                <p
                                    className="
                                        text-2xl font-bold
                                        tracking-[0.2em]
                                        text-[#24352F] sm:text-4xl
                                    "
                                >
                                    FORMA
                                </p>

                                <p
                                    className="
                                        mt-3 text-xs font-semibold
                                        uppercase tracking-[0.3em]
                                        text-[#8B7355] sm:text-sm
                                    "
                                >
                                    Designed for Living
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MISSION & VISION ================= */}
            <section
                className="
                    forma-animated-border
                    bg-[#E9E2D5] px-3 py-14
                    sm:px-6 sm:py-20 lg:px-8 lg:py-24
                "
            >
                <div className="mx-auto max-w-7xl">

                    <div
                        className="
                            mx-auto mb-9 max-w-2xl text-center
                            sm:mb-12
                        "
                    >
                        <p
                            className="
                                mb-3 text-[10px] font-bold uppercase
                                tracking-[0.25em] text-[#C47A45]
                                sm:text-sm sm:tracking-[0.3em]
                            "
                        >
                            What Drives Us
                        </p>

                        <h2
                            className="
                                text-2xl font-bold text-[#24352F]
                                sm:text-4xl md:text-5xl
                            "
                        >
                            Our Mission & Vision
                        </h2>

                        <p
                            className="
                                mx-auto mt-3 max-w-xl
                                text-xs leading-6 text-[#5C6B73]
                                sm:mt-5 sm:text-base sm:leading-8
                            "
                        >
                            The purpose behind what we create
                            and the future we want to build.
                        </p>
                    </div>

                    <div
                        className="
                            grid grid-cols-2 gap-3
                            sm:gap-6 lg:gap-8
                        "
                    >

                        {/* Mission Card */}
                        <article
                            className="
                                forma-animated-border
                                group overflow-hidden rounded-xl
                                border border-[#D6B77A]/40
                                bg-[#F5F1E9] shadow-sm
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-xl
                                sm:rounded-3xl
                            "
                        >
                            <div
                                className="
                                    relative h-28 overflow-hidden
                                    bg-[#24352F]/10
                                    sm:h-56 md:h-72
                                "
                            >
                                <img
                                    src="/images/about/mission.jpg"
                                    alt="FORMA Furniture mission"
                                    className="
                                        h-full w-full object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />
                            </div>

                            <div className="p-3 sm:p-6 md:p-8">
                                <p
                                    className="
                                        mb-2 text-[9px] font-bold
                                        uppercase tracking-[0.15em]
                                        text-[#C47A45]
                                        sm:mb-3 sm:text-xs
                                        sm:tracking-[0.25em]
                                    "
                                >
                                    Our Purpose
                                </p>

                                <h3
                                    className="
                                        mb-2 text-base font-bold
                                        text-[#24352F]
                                        sm:mb-4 sm:text-2xl
                                        md:text-3xl
                                    "
                                >
                                    Our Mission
                                </h3>

                                <p
                                    className="
                                        text-[11px] leading-5
                                        text-[#5C6B73]
                                        sm:text-sm sm:leading-7
                                        md:text-base
                                    "
                                >
                                    To make thoughtfully designed,
                                    comfortable, and functional
                                    furniture accessible to every
                                    home, helping people create
                                    spaces that express their
                                    personality and make everyday
                                    living more meaningful.
                                </p>
                            </div>
                        </article>

                        {/* Vision Card */}
                        <article
                            className="
                                forma-animated-border
                                group overflow-hidden rounded-xl
                                border border-[#D6B77A]/40
                                bg-[#F5F1E9] shadow-sm
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-xl
                                sm:rounded-3xl
                            "
                        >
                            <div
                                className="
                                    relative h-28 overflow-hidden
                                    bg-[#C47A45]/10
                                    sm:h-56 md:h-72
                                "
                            >
                                <img
                                    src="/images/about/vision.jpg"
                                    alt="FORMA Furniture vision"
                                    className="
                                        h-full w-full object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />
                            </div>

                            <div className="p-3 sm:p-6 md:p-8">
                                <p
                                    className="
                                        mb-2 text-[9px] font-bold
                                        uppercase tracking-[0.15em]
                                        text-[#C47A45]
                                        sm:mb-3 sm:text-xs
                                        sm:tracking-[0.25em]
                                    "
                                >
                                    Our Future
                                </p>

                                <h3
                                    className="
                                        mb-2 text-base font-bold
                                        text-[#24352F]
                                        sm:mb-4 sm:text-2xl
                                        md:text-3xl
                                    "
                                >
                                    Our Vision
                                </h3>

                                <p
                                    className="
                                        text-[11px] leading-5
                                        text-[#5C6B73]
                                        sm:text-sm sm:leading-7
                                        md:text-base
                                    "
                                >
                                    To become a trusted furniture
                                    destination known for timeless
                                    design, quality craftsmanship,
                                    and inspiring living spaces
                                    that bring comfort, beauty,
                                    and lasting value to homes.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= OUR VALUES ================= */}
            <section
                className="
                    forma-animated-border
                    bg-white px-3 py-14
                    sm:px-6 sm:py-20 lg:px-8 lg:py-24
                "
            >
                <div className="mx-auto max-w-7xl">

                    <div
                        className="
                            mx-auto mb-9 max-w-2xl text-center
                            sm:mb-12
                        "
                    >
                        <p
                            className="
                                mb-3 text-[10px] font-bold uppercase
                                tracking-[0.25em] text-[#C47A45]
                                sm:text-sm sm:tracking-[0.3em]
                            "
                        >
                            What We Believe
                        </p>

                        <h2
                            className="
                                text-2xl font-bold text-[#24352F]
                                sm:text-4xl md:text-5xl
                            "
                        >
                            Our Values, Your Home
                        </h2>

                        <p
                            className="
                                mx-auto mt-3 max-w-xl
                                text-xs leading-6 text-[#5C6B73]
                                sm:mt-5 sm:text-base sm:leading-8
                            "
                        >
                            The principles behind the furniture
                            and experiences we bring to your space.
                        </p>
                    </div>

                    <div
                        className="
                            grid grid-cols-3 gap-2
                            sm:gap-5 lg:gap-8
                        "
                    >
                        {values.map((value) => (
                            <article
                                key={value.number}
                                className="
                                    forma-animated-border
                                    group min-w-0 rounded-xl
                                    border border-[#D6B77A]/25
                                    bg-[#F5F1E9] p-2
                                    shadow-sm transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-[#C47A45]/50
                                    hover:shadow-xl
                                    sm:rounded-2xl sm:p-5
                                    md:p-7 lg:p-9
                                "
                            >
                                <span
                                    className="
                                        mb-3 inline-flex
                                        h-7 w-7 items-center
                                        justify-center rounded-lg
                                        bg-[#24352F]
                                        text-[10px] font-bold
                                        text-[#D6B77A]
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                        sm:mb-5 sm:h-10 sm:w-10
                                        sm:text-xs md:h-12 md:w-12
                                    "
                                >
                                    {value.number}
                                </span>

                                <h3
                                    className="
                                        mb-2 break-words
                                        text-xs font-bold
                                        leading-tight text-[#24352F]
                                        sm:mb-3 sm:text-lg
                                        md:text-xl lg:text-2xl
                                    "
                                >
                                    {value.title}
                                </h3>

                                <p
                                    className="
                                        break-words text-[10px]
                                        leading-4 text-[#5C6B73]
                                        sm:text-xs sm:leading-6
                                        md:text-sm lg:text-base
                                    "
                                >
                                    {value.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= COLLECTION CTA ================= */}
            <section
                className="
                    forma-animated-border
                    bg-[#24352F] px-5 py-14
                    text-center sm:px-8 sm:py-20
                "
            >
                <div className="mx-auto max-w-3xl">
                    <p
                        className="
                            mb-4 text-xs font-semibold uppercase
                            tracking-[0.3em] text-[#D6B77A]
                            sm:text-sm
                        "
                    >
                        Make Yourself at Home
                    </p>

                    <h2
                        className="
                            text-3xl font-bold text-[#F7F1E8]
                            sm:text-4xl md:text-5xl
                        "
                    >
                        Find the pieces that
                        <span className="text-[#D6B77A]">
                            {" "}feel like you.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto mt-5 max-w-xl
                            text-sm leading-7
                            text-[#F7F1E8]/70
                            sm:text-base sm:leading-8
                        "
                    >
                        Explore furniture designed to bring
                        personality, comfort, and warmth
                        into every corner of your home.
                    </p>

                    <Link
                        to="/shop"
                        className="
                            mt-8 inline-flex w-full max-w-xs
                            items-center justify-center
                            rounded-full bg-[#C47A45]
                            px-8 py-4 text-sm font-bold
                            text-white shadow-lg
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:bg-[#D18A55]
                            hover:shadow-xl sm:w-auto
                        "
                    >
                        Discover Our Collection
                    </Link>
                </div>
            </section>

        </main>
    );
}

export default About;