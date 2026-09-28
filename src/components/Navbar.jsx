import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
    const { wishlist, cartCount } = useStore();

    const quotes = [
        "✦ Furniture that turns houses into homes",
        "✦ Designed for comfort, crafted for life",
        "✦ Your space, your style, your story",
        "✦ Timeless design for modern living",
        "✦ Beautiful spaces begin with beautiful furniture",
    ];

    return (
        <header className="sticky top-0 z-50 w-full overflow-hidden">

            {/* =====================================================
                CONTINUOUS MARQUEE ANIMATION
            ====================================================== */}
            <style>{`
                @keyframes furnitureMarquee {
                    0% {
                        transform: translateX(0);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }

                .furniture-marquee {
                    display: flex;
                    width: max-content;
                    animation: furnitureMarquee 25s linear infinite;
                    will-change: transform;
                }

                .marquee-group {
                    display: flex;
                    flex-shrink: 0;
                    width: max-content;
                }

                .furniture-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* =====================================================
                MAIN NAVBAR
            ====================================================== */}
            <div
                className="
                    border-b
                    border-[#D6B77A]/20
                    bg-[#24352F]
                    shadow-[0_8px_30px_rgba(36,53,47,0.18)]
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        min-h-[76px]
                        max-w-[1600px]
                        items-center
                        justify-between
                        px-2
                        sm:px-4
                        lg:px-6
                        xl:px-8
                    "
                >

                    {/* =================================================
                        LOGO
                    ================================================== */}
                    <Link
                        to="/"
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                        "
                    >
                        {/* Logo Background */}
                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#F7F1E8]
                                p-1.5
                                shadow-[0_4px_15px_rgba(0,0,0,0.18)]
                                transition-all
                                duration-500
                                group-hover:scale-105
                                group-hover:rotate-1
                                sm:h-14
                                sm:w-14
                            "
                        >
                            <img
                                src="/logo.png"
                                alt="Forma Furniture"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Brand */}
                        <div className="flex flex-col leading-none">
                            <span
                                className="
                                    text-lg
                                    font-extrabold
                                    tracking-[0.25em]
                                    text-[#F7F1E8]
                                    sm:text-xl
                                "
                            >
                                FORMA
                            </span>

                            <span
                                className="
                                    mt-1
                                    text-[8px]
                                    font-semibold
                                    tracking-[0.35em]
                                    text-[#D6B77A]
                                    sm:text-[9px]
                                "
                            >
                                FURNITURE
                            </span>
                        </div>
                    </Link>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}
                    <nav className="hidden items-center gap-7 md:flex lg:gap-9">

                        {/* Home */}
                        <Link
                            to="/"
                            className="
                                group
                                relative
                                py-2
                                text-sm
                                font-medium
                                text-[#F7F1E8]
                                transition-all
                                duration-300
                                hover:text-[#D6B77A]
                            "
                        >
                            Home

                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-1/2
                                    h-[2px]
                                    w-0
                                    -translate-x-1/2
                                    rounded-full
                                    bg-[#D6B77A]
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />
                        </Link>

                        {/* Collection */}
                        <Link
                            to="/shop"
                            className="
                                group
                                relative
                                py-2
                                text-sm
                                font-medium
                                text-[#F7F1E8]
                                transition-all
                                duration-300
                                hover:text-[#D6B77A]
                            "
                        >
                            Collection

                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-1/2
                                    h-[2px]
                                    w-0
                                    -translate-x-1/2
                                    rounded-full
                                    bg-[#D6B77A]
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />
                        </Link>

                        {/* Rooms */}
                        

                        {/* Contact */}
                        <Link
                            to="/contact"
                            className="
                                group
                                relative
                                py-2
                                text-sm
                                font-medium
                                text-[#F7F1E8]
                                transition-all
                                duration-300
                                hover:text-[#D6B77A]
                            "
                        >
                            Contact

                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-1/2
                                    h-[2px]
                                    w-0
                                    -translate-x-1/2
                                    rounded-full
                                    bg-[#D6B77A]
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />
                        </Link>
                    </nav>

                    {/* =================================================
                        RIGHT ACTIONS
                    ================================================== */}
                    <div className="flex items-center gap-2 sm:gap-3">

                        {/* Wishlist */}
                        <Link
                            to="/wishlist"
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#F7F1E8]/15
                                px-3
                                py-2
                                text-xs
                                font-medium
                                text-[#F7F1E8]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-[#C47A45]
                                hover:bg-[#C47A45]/15
                            "
                        >
                            <span className="hidden sm:inline">
                                Wishlist
                            </span>

                            <span
                                className="
                                    flex
                                    h-5
                                    min-w-5
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#C47A45]
                                    px-1
                                    text-[10px]
                                    font-bold
                                    text-white
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                {wishlist.length}
                            </span>
                        </Link>

                        {/* Bag */}
                        <Link
                            to="/cart"
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#F7F1E8]/15
                                px-3
                                py-2
                                text-xs
                                font-medium
                                text-[#F7F1E8]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-[#C47A45]
                                hover:bg-[#C47A45]/15
                            "
                        >
                            <span className="hidden sm:inline">
                                Bag
                            </span>

                            <span
                                className="
                                    flex
                                    h-5
                                    min-w-5
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#C47A45]
                                    px-1
                                    text-[10px]
                                    font-bold
                                    text-white
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                {cartCount}
                            </span>
                        </Link>

                        {/* Admin */}
                        <Link
                            to="/admin"
                            className="
                                hidden
                                rounded-full
                                bg-[#D6B77A]
                                px-4
                                py-2
                                text-xs
                                font-bold
                                text-[#24352F]
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[#E7D9C5]
                                hover:shadow-lg
                                sm:inline-flex
                            "
                        >
                            Admin
                        </Link>
                    </div>
                </div>

                {/* =================================================
                    MOBILE NAVIGATION
                ================================================== */}
                <div className="border-t border-[#F7F1E8]/10 md:hidden">
                    <nav
                        className="
                            mx-auto
                            flex
                            max-w-7xl
                            items-center
                            justify-center
                            gap-5
                            overflow-x-auto
                            px-2
                            py-3
                            sm:px-4
                        "
                    >
                        <Link
                            to="/"
                            className="
                                whitespace-nowrap
                                text-xs
                                font-medium
                                text-[#F7F1E8]
                                transition-colors
                                duration-300
                                hover:text-[#D6B77A]
                            "
                        >
                            Home
                        </Link>

                        <Link
                            to="/shop"
                            className="
                                whitespace-nowrap
                                text-xs
                                font-medium
                                text-[#F7F1E8]
                                transition-colors
                                duration-300
                                hover:text-[#D6B77A]
                            "
                        >
                            Collection
                        </Link>

                        <Link
                            to="/#collections"
                            className="
                                whitespace-nowrap
                                text-xs
                                font-medium
                                text-[#F7F1E8]
                                transition-colors
                                duration-300
                                hover:text-[#D6B77A]
                            "
                        >
                            Rooms
                        </Link>

                        <Link
                            to="/contact"
                            className="
                                whitespace-nowrap
                                text-xs
                                font-medium
                                text-[#F7F1E8]
                                transition-colors
                                duration-300
                                hover:text-[#D6B77A]
                            "
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>

            {/* =====================================================
                CONTINUOUS FURNITURE QUOTE MARQUEE
            ====================================================== */}
            <div
                className="
                    w-full
                    overflow-hidden
                    border-b
                    border-[#24352F]/10
                    bg-[#C47A45]
                    py-2
                "
            >
                <div className="furniture-marquee">

                    {/* GROUP 1 */}
                    <div className="marquee-group">
                        {quotes.map((quote, index) => (
                            <span
                                key={`first-${index}`}
                                className="
                                    whitespace-nowrap
                                    px-5
                                    text-[10px]
                                    font-semibold
                                    tracking-wide
                                    text-[#FFF8EF]
                                    sm:px-7
                                    sm:text-xs
                                "
                            >
                                {quote}
                            </span>
                        ))}
                    </div>

                    {/* GROUP 2 */}
                    <div className="marquee-group">
                        {quotes.map((quote, index) => (
                            <span
                                key={`second-${index}`}
                                className="
                                    whitespace-nowrap
                                    px-5
                                    text-[10px]
                                    font-semibold
                                    tracking-wide
                                    text-[#FFF8EF]
                                    sm:px-7
                                    sm:text-xs
                                "
                            >
                                {quote}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </header>
    );
}