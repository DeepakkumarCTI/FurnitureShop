import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    // Scroll to the top whenever the route changes.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    // Show the button after the user scrolls down.
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <style>{`
                .forma-scroll-top {
                    position: fixed;
                    right: 24px;
                    bottom: 24px;
                    z-index: 999;
                    display: flex;
                    width: 52px;
                    height: 52px;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 255, 255, 0.35);
                    border-radius: 50%;
                    background: linear-gradient(135deg, #315d50, #24352f);
                    color: #f7f1e8;
                    font-size: 24px;
                    font-weight: 700;
                    box-shadow: 0 10px 28px rgba(36, 53, 47, 0.28);
                    cursor: pointer;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(14px);
                    transition:
                        opacity 250ms ease,
                        visibility 250ms ease,
                        transform 250ms ease,
                        background 250ms ease;
                }

                .forma-scroll-top.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .forma-scroll-top:hover {
                    background: linear-gradient(135deg, #c47a45, #a65f30);
                    transform: translateY(-4px);
                }

                .forma-scroll-top:focus-visible {
                    outline: 3px solid #c47a45;
                    outline-offset: 4px;
                }

                @media (max-width: 640px) {
                    .forma-scroll-top {
                        right: 16px;
                        bottom: 16px;
                        width: 46px;
                        height: 46px;
                        font-size: 21px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .forma-scroll-top {
                        transition: none;
                    }
                }
            `}</style>

            <button
                type="button"
                className={`forma-scroll-top ${visible ? "visible" : ""}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                title="Back to top"
                tabIndex={visible ? 0 : -1}
            >
                ↑
            </button>
        </>
    );
}