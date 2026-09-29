
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
    const { wishlist, cartCount } = useStore();
    const location = useLocation();

    const quotes = [
        "✦ Furniture that turns houses into homes",
        "✦ Designed for comfort, crafted for life",
        "✦ Your space, your style, your story",
        "✦ Timeless design for modern living",
        "✦ Beautiful spaces begin with beautiful furniture",
    ];

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Collection", path: "/shop" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname === path;
    };

    const navLinkClass = (path) => `
        group relative whitespace-nowrap py-2 text-sm font-medium
        transition-all duration-300
        ${isActive(path)
            ? "text-[#D6B77A]"
            : "text-[#F7F1E8] hover:text-[#D6B77A]"
        }
    `;

    return (
        <header className="sticky top-0 z-50 w-full overflow-hidden">

            {/* Marquee Animation */}
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

                @media (prefers-reduced-motion: reduce) {
                    .furniture-marquee {
                        animation: none;
                    }
                }
            `}</style>

            {/* Main Navbar */}
            <div className="
                border-b border-[#D6B77A]/20
                bg-[#24352F]
                shadow-[0_8px_30px_rgba(36,53,47,0.18)]
            ">
                <div className="
                    mx-auto flex min-h-[76px] max-w-[1600px]
                    items-center justify-between gap-2
                    px-3 sm:px-5 lg:px-8
                ">

                    {/* Logo */}
                    <Link
                        to="/"
                        aria-label="FORMA Furniture Home"
                        className="
                            group flex shrink-0 items-center gap-2
                            transition-all duration-300
                            hover:-translate-y-0.5
                            sm:gap-3
                        "
                    >
                        <div className="
                            flex h-10 w-10 items-center justify-center
                            rounded-xl bg-[#F7F1E8] p-1.5
                            shadow-[0_4px_15px_rgba(0,0,0,0.18)]
                            transition-all duration-500
                            group-hover:scale-105
                            group-hover:rotate-1
                            sm:h-14 sm:w-14
                        ">
                            <img
                                src="/logo.png"
                                alt="FORMA Furniture"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col leading-none">
                            <span className="
                                text-base font-extrabold
                                tracking-[0.18em] text-[#F7F1E8]
                                sm:text-xl sm:tracking-[0.25em]
                            ">
                                FORMA
                            </span>

                            <span className="
                                mt-1 text-[7px] font-semibold
                                tracking-[0.2em] text-[#D6B77A]
                                sm:text-[9px] sm:tracking-[0.35em]
                            ">
                                FURNITURE
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-5 md:flex lg:gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                aria-current={
                                    isActive(link.path) ? "page" : undefined
                                }
                                className={navLinkClass(link.path)}
                            >
                                {link.name}

                                <span className={`
                                    absolute bottom-0 left-1/2
                                    h-[2px] -translate-x-1/2
                                    rounded-full bg-[#D6B77A]
                                    transition-all duration-300
                                    ${isActive(link.path)
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                    }
                                `} />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">

                        {/* Wishlist */}
                        <Link
                            to="/wishlist"
                            aria-label={`Wishlist, ${wishlist.length} items`}
                            className="
                                group flex items-center gap-1.5
                                rounded-full border border-[#F7F1E8]/15
                                px-2 py-2 text-xs font-medium
                                text-[#F7F1E8]
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:border-[#C47A45]
                                hover:bg-[#C47A45]/15
                                sm:gap-2 sm:px-3
                            "
                        >
                            <span className="hidden sm:inline">
                                Wishlist
                            </span>

                            <span className="
                                flex h-5 min-w-5 items-center
                                justify-center rounded-full
                                bg-[#C47A45] px-1 text-[10px]
                                font-bold text-white
                                transition-transform duration-300
                                group-hover:scale-110
                            ">
                                {wishlist.length}
                            </span>
                        </Link>

                        {/* Shopping Bag */}
                        <Link
                            to="/cart"
                            aria-label={`Shopping bag, ${cartCount} items`}
                            className="
                                group flex items-center gap-1.5
                                rounded-full border border-[#F7F1E8]/15
                                px-2 py-2 text-xs font-medium
                                text-[#F7F1E8]
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:border-[#C47A45]
                                hover:bg-[#C47A45]/15
                                sm:gap-2 sm:px-3
                            "
                        >
                            <span className="hidden sm:inline">
                                Bag
                            </span>

                            <span className="
                                flex h-5 min-w-5 items-center
                                justify-center rounded-full
                                bg-[#C47A45] px-1 text-[10px]
                                font-bold text-white
                                transition-transform duration-300
                                group-hover:scale-110
                            ">
                                {cartCount}
                            </span>
                        </Link>

                        {/* Admin */}
                        <Link
                            to="/admin"
                            className="
                                hidden rounded-full bg-[#D6B77A]
                                px-4 py-2 text-xs font-bold
                                text-[#24352F] shadow-sm
                                transition-all duration-300
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

                {/* Mobile Navigation */}
                <div className="border-t border-[#F7F1E8]/10 md:hidden">
                    <nav
                        aria-label="Mobile navigation"
                        className="
                            mx-auto flex max-w-full items-center
                            justify-start gap-6 overflow-x-auto
                            px-4 py-3 sm:justify-center
                            sm:gap-8 sm:px-5
                        "
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                aria-current={
                                    isActive(link.path) ? "page" : undefined
                                }
                                className={`
                                    whitespace-nowrap text-xs font-medium
                                    transition-colors duration-300
                                    ${isActive(link.path)
                                        ? "text-[#D6B77A]"
                                        : "text-[#F7F1E8] hover:text-[#D6B77A]"
                                    }
                                `}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            to="/admin"
                            className="
                                whitespace-nowrap text-xs font-medium
                                text-[#D6B77A] transition-colors
                                duration-300 hover:text-[#F7F1E8]
                                sm:hidden
                            "
                        >
                            Admin
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Furniture Quote Marquee */}
            <div className="
                w-full overflow-hidden border-b
                border-[#24352F]/10 bg-[#C47A45] py-2
            ">
                <div className="furniture-marquee">

                    {/* First Group */}
                    <div className="marquee-group">
                        {quotes.map((quote, index) => (
                            <span
                                key={`first-${index}`}
                                className="
                                    whitespace-nowrap px-5
                                    text-[10px] font-semibold
                                    tracking-wide text-[#FFF8EF]
                                    sm:px-7 sm:text-xs
                                "
                            >
                                {quote}
                            </span>
                        ))}
                    </div>

                    {/* Second Group */}
                    <div className="marquee-group" aria-hidden="true">
                        {quotes.map((quote, index) => (
                            <span
                                key={`second-${index}`}
                                className="
                                    whitespace-nowrap px-5
                                    text-[10px] font-semibold
                                    tracking-wide text-[#FFF8EF]
                                    sm:px-7 sm:text-xs
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