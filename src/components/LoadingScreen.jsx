import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2200;
        const intervalTime = 30;
        const increment = (intervalTime / duration) * 100;

        const interval = setInterval(() => {
            setProgress((previous) => {
                const next = Math.min(previous + increment, 100);

                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 350);
                }

                return next;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="forma-loader fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F1E8]">
            {/* Animated background glows */}
            <div className="loader-glow loader-glow-one absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[#D6B77A]/30 blur-3xl" />
            <div className="loader-glow loader-glow-two absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#C47A45]/20 blur-3xl" />
            <div className="loader-glow loader-glow-three absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#24352F]/10 blur-3xl" />

            {/* Floating decorative shapes */}
            <div className="loader-orb loader-orb-one absolute left-[12%] top-[22%] h-4 w-4 rounded-full bg-[#C47A45]/70" />
            <div className="loader-orb loader-orb-two absolute right-[16%] top-[28%] h-3 w-3 rounded-full bg-[#D6B77A]" />
            <div className="loader-orb loader-orb-three absolute bottom-[22%] left-[20%] h-5 w-5 rounded-full border-2 border-[#24352F]/30" />
            <div className="loader-orb loader-orb-four absolute bottom-[26%] right-[18%] h-3 w-3 rounded-full bg-[#C47A45]/60" />

            {/* Main loading content */}
            <div className="loader-content relative flex w-full max-w-sm flex-col items-center px-8 text-center">
                {/* Animated logo area */}
                <div className="loader-logo-wrap relative mb-8 flex h-40 w-40 items-center justify-center">
                    {/* Outer rotating ring */}
                    <div className="loader-ring loader-ring-outer absolute inset-0 rounded-full border border-dashed border-[#C47A45]/50" />

                    {/* Inner rotating ring */}
                    <div className="loader-ring loader-ring-inner absolute inset-3 rounded-full border-2 border-[#D6B77A]/60 border-t-[#24352F]" />

                    {/* Orbiting dot */}
                    <div className="loader-orbit absolute inset-0">
                        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#C47A45] shadow-lg shadow-[#C47A45]/40" />
                    </div>

                    {/* Logo glow */}
                    <div className="loader-logo-glow absolute inset-7 rounded-[28px] bg-[#D6B77A]/40 blur-xl" />

                    {/* Logo container */}
                    <div className="loader-logo relative z-10 flex h-28 w-28 items-center justify-center rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-[#24352F]/15 backdrop-blur-sm">
                        <img
                            src="/logo.png"
                            alt="FORMA logo"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                {/* Animated brand name */}
                <div className="loader-brand flex items-center justify-center gap-[0.12em] text-3xl font-bold tracking-[0.18em] text-[#24352F]">
                    {"FORMA".split("").map((letter, index) => (
                        <span
                            key={letter}
                            className="loader-letter inline-block"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                <p className="loader-tagline mt-3 text-xs font-medium uppercase tracking-[0.25em] text-[#C47A45]">
                    Furniture · Crafted for living
                </p>

                {/* Animated loading message */}
                <div className="mt-8 flex items-center gap-2">
                    <span className="loader-dot h-1.5 w-1.5 rounded-full bg-[#C47A45]" />
                    <span className="loader-dot h-1.5 w-1.5 rounded-full bg-[#C47A45]" />
                    <span className="loader-dot h-1.5 w-1.5 rounded-full bg-[#C47A45]" />
                    <span className="ml-2 text-xs font-medium tracking-wide text-[#24352F]/65">
                        Preparing your space
                    </span>
                </div>

                {/* Progress bar */}
                <div className="loader-progress mt-6 w-full">
                    <div className="relative h-2 overflow-hidden rounded-full bg-[#24352F]/10">
                        <div
                            className="loader-progress-fill relative h-full rounded-full bg-gradient-to-r from-[#C47A45] via-[#D6B77A] to-[#24352F]"
                            style={{ width: `${progress}%` }}
                        >
                            <span className="loader-progress-shimmer absolute inset-0" />
                        </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#24352F]/60">
                        <span>Loading experience</span>
                        <span className="tabular-nums">{Math.round(progress)}%</span>
                    </div>
                </div>
            </div>

            <style>{`
        .forma-loader {
          animation: loaderFadeIn 500ms ease-out both;
        }

        .loader-content {
          animation: contentReveal 900ms cubic-bezier(.2,.8,.2,1) both;
        }

        /* Background glow movement */
        .loader-glow {
          animation: glowFloat 7s ease-in-out infinite alternate;
        }

        .loader-glow-two {
          animation-delay: -3s;
        }

        .loader-glow-three {
          animation-duration: 9s;
          animation-delay: -5s;
        }

        /* Floating decorative dots */
        .loader-orb {
          animation: orbFloat 4s ease-in-out infinite;
        }

        .loader-orb-two {
          animation-delay: -1s;
        }

        .loader-orb-three {
          animation-delay: -2s;
        }

        .loader-orb-four {
          animation-delay: -3s;
        }

        /* Logo rings */
        .loader-ring-outer {
          animation: rotateClockwise 12s linear infinite;
        }

        .loader-ring-inner {
          animation: rotateCounterClockwise 8s linear infinite;
        }

        .loader-orbit {
          animation: rotateClockwise 4s linear infinite;
        }

        .loader-logo-glow {
          animation: logoGlow 2.5s ease-in-out infinite;
        }

        .loader-logo {
          animation: logoFloat 3s ease-in-out infinite;
        }

        /* Brand letters appear one after another */
        .loader-letter {
          opacity: 0;
          animation: letterReveal 550ms cubic-bezier(.2,.8,.2,1) forwards;
        }

        .loader-tagline {
          opacity: 0;
          animation: fadeUp 700ms ease-out 650ms forwards;
        }

        /* Three animated loading dots */
        .loader-dot {
          animation: dotPulse 1s ease-in-out infinite;
        }

        .loader-dot:nth-child(2) {
          animation-delay: 150ms;
        }

        .loader-dot:nth-child(3) {
          animation-delay: 300ms;
        }

        .loader-progress {
          opacity: 0;
          animation: fadeUp 700ms ease-out 900ms forwards;
        }

        .loader-progress-fill {
          transition: width 100ms linear;
          overflow: hidden;
        }

        .loader-progress-shimmer {
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.65) 48%,
            transparent 75%
          );
          transform: translateX(-100%);
          animation: progressShimmer 1.3s ease-in-out infinite;
        }

        @keyframes loaderFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes rotateClockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateCounterClockwise {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes glowFloat {
          from {
            transform: translate3d(0, 0, 0) scale(0.95);
          }
          to {
            transform: translate3d(28px, -20px, 0) scale(1.12);
          }
        }

        @keyframes orbFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-18px) scale(1.12);
          }
        }

        @keyframes logoGlow {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.12);
          }
        }

        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes letterReveal {
          from {
            opacity: 0;
            transform: translateY(18px) rotateX(-45deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes progressShimmer {
          to {
            transform: translateX(100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .forma-loader *,
          .forma-loader *::before,
          .forma-loader *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
        </div>
    );
}