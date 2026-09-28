import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    X,
    ShieldCheck,
    FileText,
    Truck,
    RotateCcw,
} from "lucide-react";

export default function Footer() {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modal) => {
        setActiveModal(modal);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const policies = {
        privacy: {
            title: "Privacy Policy",
            icon: ShieldCheck,
            content: (
                <>
                    <p>
                        At FORMA Furniture, we respect your privacy and are
                        committed to protecting your personal information.
                    </p>

                    <p>
                        We may collect information such as your name, email
                        address, phone number, delivery address, and order
                        details when you use our website or place an order.
                    </p>

                    <p>
                        Your information is used to process orders, provide
                        customer support, improve our services, and communicate
                        important updates regarding your purchases.
                    </p>

                    <p>
                        We do not sell or rent your personal information to
                        third parties.
                    </p>
                </>
            ),
        },

        terms: {
            title: "Terms & Conditions",
            icon: FileText,
            content: (
                <>
                    <p>
                        By using the FORMA Furniture website, you agree to
                        follow these terms and conditions.
                    </p>

                    <p>
                        Product information, images, pricing, and availability
                        may be updated from time to time without prior notice.
                    </p>

                    <p>
                        Customers are responsible for providing accurate
                        delivery and contact information when placing an order.
                    </p>

                    <p>
                        FORMA Furniture reserves the right to update products,
                        services, policies, and website content whenever
                        necessary.
                    </p>
                </>
            ),
        },

        shipping: {
            title: "Shipping & Delivery",
            icon: Truck,
            content: (
                <>
                    <p>
                        We carefully pack every furniture order before
                        dispatch to help ensure safe delivery.
                    </p>

                    <p>
                        Delivery time may vary depending on the product,
                        destination, availability, and delivery partner.
                    </p>

                    <p>
                        Customers will be contacted using the information
                        provided during checkout regarding important delivery
                        updates.
                    </p>

                    <p>
                        Delivery timelines may change due to weather,
                        transportation issues, holidays, or other unexpected
                        circumstances.
                    </p>
                </>
            ),
        },

        returns: {
            title: "Returns & Cancellation",
            icon: RotateCcw,
            content: (
                <>
                    <p>
                        If you receive a damaged or incorrect product, please
                        contact our support team as soon as possible with your
                        order details and relevant photographs.
                    </p>

                    <p>
                        Return eligibility may depend on the product condition,
                        order status, and applicable return conditions.
                    </p>

                    <p>
                        Cancellation requests should be submitted as early as
                        possible before the order is processed or dispatched.
                    </p>

                    <p>
                        Custom-made or specially configured furniture may be
                        subject to different cancellation and return
                        conditions.
                    </p>
                </>
            ),
        },
    };

    const linkClass =
        "text-xs sm:text-sm text-[#F7F1E8]/65 transition-all duration-300 hover:translate-x-1 hover:text-[#D6B77A]";

    return (
        <>
            <footer className="w-full bg-[#24352F] text-[#F7F1E8]">

                {/* =====================================================
                    MAIN FOOTER
                ====================================================== */}
                <div
                    className="
                        w-full
                        px-3
                        py-12
                        sm:px-5
                        sm:py-14
                        md:px-6
                        lg:px-8
                        xl:px-10
                        2xl:px-12
                    "
                >

                    {/* =================================================
                        FOOTER GRID
                    ================================================== */}
                    <div
                        className="
                            grid
                            w-full
                            grid-cols-1
                            gap-y-12

                            sm:grid-cols-2
                            sm:gap-x-10
                            sm:gap-y-14

                            lg:grid-cols-4
                            lg:gap-x-10
                            lg:gap-y-0

                            xl:gap-x-16

                            2xl:gap-x-24
                        "
                    >

                        {/* =================================================
                            BRAND
                        ================================================== */}
                        <div className="min-w-0">

                            <Link
                                to="/"
                                className="group mb-6 inline-flex w-fit items-center gap-3"
                            >
                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        shrink-0
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        rounded-xl
                                        bg-[#F7F1E8]
                                        p-1.5
                                        shadow-[0_5px_20px_rgba(0,0,0,0.18)]
                                        transition-all
                                        duration-300
                                        group-hover:scale-105
                                    "
                                >
                                    <img
                                        src="/logo.png"
                                        alt="FORMA Furniture Logo"
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div className="leading-tight">
                                    <span
                                        className="
                                            block
                                            text-base
                                            font-extrabold
                                            tracking-[0.2em]
                                            text-[#F7F1E8]
                                            sm:text-lg
                                        "
                                    >
                                        FORMA
                                    </span>

                                    <span
                                        className="
                                            mt-0.5
                                            block
                                            text-[7px]
                                            font-semibold
                                            tracking-[0.3em]
                                            text-[#D6B77A]
                                            sm:text-[8px]
                                        "
                                    >
                                        FURNITURE
                                    </span>
                                </div>
                            </Link>

                            <p
                                className="
                                    mb-8
                                    max-w-xl
                                    text-xs
                                    leading-6
                                    text-[#F7F1E8]/60
                                    sm:text-sm
                                    sm:leading-7
                                "
                            >
                                Characterful furniture for warm, lived-in
                                spaces. Thoughtfully designed pieces made to
                                bring comfort, style, and personality into
                                your home.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">

                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#F7F1E8]/15
                                        text-[#F7F1E8]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#D6B77A]
                                        hover:bg-[#D6B77A]
                                        hover:text-[#24352F]
                                    "
                                >
                                    <span className="text-[11px] font-bold">
                                        IG
                                    </span>
                                </a>

                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#F7F1E8]/15
                                        text-[#F7F1E8]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#D6B77A]
                                        hover:bg-[#D6B77A]
                                        hover:text-[#24352F]
                                    "
                                >
                                    <span className="text-sm font-bold">
                                        f
                                    </span>
                                </a>

                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="X"
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#F7F1E8]/15
                                        text-[#F7F1E8]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#D6B77A]
                                        hover:bg-[#D6B77A]
                                        hover:text-[#24352F]
                                    "
                                >
                                    <span className="text-sm font-bold">
                                        X
                                    </span>
                                </a>

                                <a
                                    href="mailto:info@formafurniture.com"
                                    aria-label="Email"
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#F7F1E8]/15
                                        text-[#F7F1E8]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[#D6B77A]
                                        hover:bg-[#D6B77A]
                                        hover:text-[#24352F]
                                    "
                                >
                                    <Mail size={16} />
                                </a>

                            </div>
                        </div>

                        {/* =================================================
                            EXPLORE
                        ================================================== */}
                        <div className="min-w-0">

                            <h3
                                className="
                                    mb-6
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#D6B77A]
                                    sm:text-sm
                                    sm:tracking-[0.2em]
                                "
                            >
                                Explore
                            </h3>

                            <nav className="flex flex-col gap-3 sm:gap-4">

                                <Link to="/" className={linkClass}>
                                    Home
                                </Link>

                                <Link to="/shop" className={linkClass}>
                                    Collection
                                </Link>

                                <Link to="/wishlist" className={linkClass}>
                                    Wishlist
                                </Link>

                                <Link to="/cart" className={linkClass}>
                                    Shopping Bag
                                </Link>

                                <Link to="/contact" className={linkClass}>
                                    Contact
                                </Link>

                                <Link to="/admin" className={linkClass}>
                                    Admin
                                </Link>

                            </nav>
                        </div>

                        {/* =================================================
                            SHOWROOM
                        ================================================== */}
                        <div className="min-w-0">

                            <h3
                                className="
                                    mb-6
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#D6B77A]
                                    sm:text-sm
                                    sm:tracking-[0.2em]
                                "
                            >
                                Showroom
                            </h3>

                            <div className="space-y-6 sm:space-y-8">

                                {/* Address */}
                                <div className="flex gap-3 sm:gap-4">

                                    <MapPin
                                        size={18}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-[#D6B77A]
                                            sm:mt-1
                                            sm:size-5
                                        "
                                    />

                                    <div className="min-w-0">

                                        <p className="text-xs font-medium text-[#F7F1E8] sm:text-sm">
                                            FORMA Furniture
                                        </p>

                                        <p className="mt-2 text-xs leading-5 text-[#F7F1E8]/60 sm:text-sm sm:leading-6">
                                            Coimbatore,
                                            <br />
                                            Tamil Nadu, India
                                        </p>

                                    </div>

                                </div>

                                {/* Hours */}
                                <div className="flex gap-3 sm:gap-4">

                                    <Clock
                                        size={18}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-[#D6B77A]
                                            sm:mt-1
                                            sm:size-5
                                        "
                                    />

                                    <div className="min-w-0">

                                        <p className="text-xs font-medium text-[#F7F1E8] sm:text-sm">
                                            Opening Hours
                                        </p>

                                        <p className="mt-2 text-xs leading-5 text-[#F7F1E8]/60 sm:text-sm sm:leading-6">
                                            Monday – Saturday
                                            <br />
                                            10:00 AM – 8:00 PM
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* =================================================
                            GET IN TOUCH
                        ================================================== */}
                        <div className="min-w-0">

                            <h3
                                className="
                                    mb-6
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#D6B77A]
                                    sm:text-sm
                                    sm:tracking-[0.2em]
                                "
                            >
                                Get In Touch
                            </h3>

                            <div className="space-y-4 sm:space-y-5">

                                {/* Phone */}
                                <a
                                    href="tel:+919000000000"
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        text-xs
                                        text-[#F7F1E8]/65
                                        transition-colors
                                        duration-300
                                        hover:text-[#D6B77A]
                                        sm:text-sm
                                    "
                                >
                                    <Phone
                                        size={16}
                                        className="
                                            shrink-0
                                            text-[#D6B77A]
                                            sm:size-5
                                        "
                                    />

                                    <span className="font-medium">
                                        +91 90000 00000
                                    </span>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:info@formafurniture.com"
                                    className="
                                        flex
                                        min-w-0
                                        items-center
                                        gap-3
                                        overflow-hidden
                                        text-xs
                                        text-[#F7F1E8]/65
                                        transition-colors
                                        duration-300
                                        hover:text-[#D6B77A]
                                        sm:text-sm
                                    "
                                    title="info@formafurniture.com"
                                >
                                    <Mail
                                        size={16}
                                        className="
                                            shrink-0
                                            text-[#D6B77A]
                                            sm:size-5
                                        "
                                    />

                                    <span className="truncate font-medium">
                                        info@formafurniture.com
                                    </span>
                                </a>

                                {/* Help Box */}
                                <div
                                    className="
                                        mt-6
                                        rounded-lg
                                        border
                                        border-[#D6B77A]/15
                                        bg-[#F7F1E8]/5
                                        p-4
                                        sm:mt-8
                                        sm:p-5
                                    "
                                >
                                    <p
                                        className="
                                            text-xs
                                            leading-5
                                            text-[#F7F1E8]/55
                                            sm:text-sm
                                            sm:leading-6
                                        "
                                    >
                                        Need help with an order or product?
                                        Our team is happy to assist you.
                                    </p>

                                    <Link
                                        to="/contact"
                                        className="
                                            mt-3
                                            inline-flex
                                            text-xs
                                            font-semibold
                                            text-[#D6B77A]
                                            transition-colors
                                            duration-300
                                            hover:text-[#F7F1E8]
                                            sm:mt-4
                                        "
                                    >
                                        Contact Us →
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        DIVIDER
                    ================================================== */}
                    <div
                        className="
                            my-8
                            h-px
                            w-full
                            bg-[#F7F1E8]/10
                            sm:my-10
                            lg:my-12
                        "
                    />

                    {/* =================================================
                        COPYRIGHT + LEGAL
                    ================================================== */}
                    <div
                        className="
                            flex
                            w-full
                            flex-col
                            gap-6
                            sm:gap-8
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >

                        <p
                            className="
                                text-center
                                text-xs
                                text-[#F7F1E8]/40
                                lg:text-left
                            "
                        >
                            © 2026 FORMA Furniture. All rights reserved.
                        </p>

                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                justify-center
                                gap-4
                                sm:gap-6
                                lg:justify-end
                            "
                        >

                            <button
                                type="button"
                                onClick={() => openModal("privacy")}
                                className="
                                    text-xs
                                    text-[#F7F1E8]/50
                                    transition-colors
                                    duration-300
                                    hover:text-[#D6B77A]
                                "
                            >
                                Privacy Policy
                            </button>

                            <button
                                type="button"
                                onClick={() => openModal("terms")}
                                className="
                                    text-xs
                                    text-[#F7F1E8]/50
                                    transition-colors
                                    duration-300
                                    hover:text-[#D6B77A]
                                "
                            >
                                Terms & Conditions
                            </button>

                            <button
                                type="button"
                                onClick={() => openModal("shipping")}
                                className="
                                    text-xs
                                    text-[#F7F1E8]/50
                                    transition-colors
                                    duration-300
                                    hover:text-[#D6B77A]
                                "
                            >
                                Shipping & Delivery
                            </button>

                            <button
                                type="button"
                                onClick={() => openModal("returns")}
                                className="
                                    text-xs
                                    text-[#F7F1E8]/50
                                    transition-colors
                                    duration-300
                                    hover:text-[#D6B77A]
                                "
                            >
                                Returns & Cancellation
                            </button>

                        </div>
                    </div>
                </div>

                {/* =====================================================
                    BOTTOM STRIP
                ====================================================== */}
                <div className="w-full border-t border-[#F7F1E8]/10 bg-[#1D2B27]">

                    <div
                        className="
                            flex
                            min-h-[50px]
                            w-full
                            items-center
                            justify-center
                            px-3
                            py-3
                            sm:min-h-[54px]
                            sm:py-4
                        "
                    >
                        <p
                            className="
                                text-center
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.15em]
                                text-[#D6B77A]/65
                                sm:text-[9px]
                                sm:tracking-[0.2em]
                            "
                        >
                            Designed for comfort · Crafted for life
                        </p>
                    </div>

                </div>

            </footer>

            {/* =========================================================
                POLICY MODAL
            ========================================================== */}
            {activeModal && policies[activeModal] && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-[#16211E]/75
                        p-3
                        backdrop-blur-sm
                        sm:p-5
                    "
                    onClick={closeModal}
                >

                    <div
                        className="
                            relative
                            flex
                            max-h-[90vh]
                            w-full
                            max-w-2xl
                            flex-col
                            overflow-hidden
                            rounded-lg
                            bg-[#F7F1E8]
                            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                            sm:rounded-xl
                        "
                        onClick={(event) => event.stopPropagation()}
                    >

                        {/* Modal Header */}
                        <div
                            className="
                                flex
                                shrink-0
                                items-center
                                justify-between
                                gap-4
                                bg-[#24352F]
                                px-4
                                py-4
                                sm:px-6
                                sm:py-5
                            "
                        >

                            <div className="flex min-w-0 items-center gap-3">

                                {React.createElement(
                                    policies[activeModal].icon,
                                    {
                                        size: 20,
                                        className:
                                            "shrink-0 text-[#D6B77A]",
                                    }
                                )}

                                <h2
                                    className="
                                        truncate
                                        text-sm
                                        font-bold
                                        text-[#F7F1E8]
                                        sm:text-lg
                                    "
                                >
                                    {policies[activeModal].title}
                                </h2>

                            </div>

                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[#F7F1E8]/70
                                    transition-all
                                    duration-300
                                    hover:bg-[#F7F1E8]/10
                                    hover:text-[#F7F1E8]
                                "
                            >
                                <X size={19} />
                            </button>

                        </div>

                        {/* Modal Content */}
                        <div
                            className="
                                min-h-0
                                flex-1
                                overflow-y-auto
                                px-4
                                py-5
                                sm:px-8
                                sm:py-7
                            "
                        >
                            <div
                                className="
                                    space-y-3
                                    text-xs
                                    leading-6
                                    text-[#24352F]/75
                                    sm:space-y-4
                                    sm:text-sm
                                    sm:leading-7
                                "
                            >
                                {policies[activeModal].content}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div
                            className="
                                shrink-0
                                border-t
                                border-[#24352F]/10
                                bg-[#EFE7DA]
                                px-4
                                py-4
                                text-right
                                sm:px-6
                            "
                        >
                            <button
                                type="button"
                                onClick={closeModal}
                                className="
                                    rounded-full
                                    bg-[#24352F]
                                    px-5
                                    py-2
                                    text-xs
                                    font-semibold
                                    text-[#F7F1E8]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[#C47A45]
                                    sm:py-2.5
                                "
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}