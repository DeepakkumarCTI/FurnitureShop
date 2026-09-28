
import React from "react";
import { Link } from "react-router-dom";

export default function Rooms() {
  const rooms = [
    {
      name: "Living Room",
      number: "01",
      description:
        "Comfortable sofas, statement chairs and thoughtful pieces for everyday living.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    },
    {
      name: "Bedroom",
      number: "02",
      description:
        "Create a calm personal space with warm textures and timeless furniture.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90",
    },
    {
      name: "Dining Room",
      number: "03",
      description:
        "Gather around beautiful dining furniture designed for everyday moments.",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=90",
    },
    {
      name: "Workspace",
      number: "04",
      description:
        "Functional desks and comfortable pieces that make work feel better.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90",
    },
    {
      name: "Outdoor",
      number: "05",
      description:
        "Relaxed outdoor pieces made for slow mornings and long evenings.",
      image:
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=90",
    },
    {
      name: "Entryway",
      number: "06",
      description:
        "Make the first impression count with practical and beautiful pieces.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F1E8]">

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[conic-gradient(#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] opacity-[0.08] blur-3xl animate-rooms-glow" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[conic-gradient(#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)] opacity-[0.07] blur-3xl animate-rooms-glow-reverse" />

      {/* Decorative dots */}
      <span className="pointer-events-none absolute right-[8%] top-[18%] h-3 w-3 rounded-full bg-[#ff004c] animate-rooms-dot" />
      <span className="pointer-events-none absolute right-[12%] top-[23%] h-2 w-2 rounded-full bg-[#00cfff] animate-rooms-dot-reverse" />
      <span className="pointer-events-none absolute bottom-[15%] left-[8%] h-3 w-3 rounded-full bg-[#9b4dff] animate-rooms-dot" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-14">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#24352F]">
                EXPLORE BY ROOM
              </span>

              <span className="h-[2px] w-16 overflow-hidden rounded-full bg-[#24352F]/10">
                <span className="block h-full w-full bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] animate-rooms-line" />
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#24352F] sm:text-5xl lg:text-6xl">
              Find the right pieces
              <br />
              <span className="bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] bg-[length:300%_300%] bg-clip-text text-transparent animate-rooms-text">
                for every room.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#24352F]/60 sm:text-base">
              Explore furniture collections designed around the way you
              actually live. From relaxed living rooms to productive
              workspaces, discover pieces with character.
            </p>
          </div>

          <Link
            to="/shop"
            className="group relative inline-flex w-fit overflow-hidden rounded-full border border-[#24352F]/15 bg-white/40 px-6 py-3 text-sm font-semibold text-[#24352F] transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10">
              View all furniture ↗
            </span>

            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] opacity-20 transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* Room grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <Link
              key={room.name}
              to={`/collection?room=${encodeURIComponent(room.name.replace(" Room", "").replace("Workspace", "Office"))}`}
              className="group relative min-h-[400px] overflow-hidden rounded-[30px] p-[2px] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Rainbow border */}
              <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] bg-[length:500%_500%] animate-rooms-border" />

              {/* Rainbow glow */}
              <div className="absolute -inset-3 rounded-[35px] bg-[conic-gradient(#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25" />

              {/* Card */}
              <div className="relative h-full min-h-[396px] overflow-hidden rounded-[28px] bg-[#24352F]">

                <img
                  src={room.image}
                  alt={room.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24352F] via-[#24352F]/30 to-transparent" />

                {/* Rainbow tint */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-25" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F1E8]/95 text-xs font-bold text-[#24352F]">
                  {room.number}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D6B77A]">
                    FORMA ROOM EDIT
                  </span>

                  <h2 className="mt-2 text-2xl font-semibold text-[#F7F1E8] sm:text-3xl">
                    {room.name}
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#F7F1E8]/65">
                    {room.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#F7F1E8]">
                    <span>Explore pieces</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      ↗
                    </span>
                  </div>

                  <div className="mt-4 h-[2px] w-16 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] transition-transform duration-500 group-hover:translate-x-0" />
                  </div>
                </div>

                {/* Shine */}
                <div className="absolute inset-y-0 -left-[120%] w-[55%] skew-x-[-20deg] bg-white/15 transition-all duration-1000 group-hover:left-[140%]" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom rainbow line */}
        <div className="mt-14 h-[3px] w-full overflow-hidden rounded-full opacity-70">
          <div className="h-full w-[200%] bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] animate-rooms-bottom-line" />
        </div>
      </div>

      <style>{`
@keyframes roomsGlow {
    0 %,
        100 % {
            transform: scale(1) rotate(0deg);
        }

    50 % {
        transform: scale(1.12) rotate(25deg);
    }
}

@keyframes roomsDot {
    0 %,
        100 % {
            transform: translateY(0) scale(1);
        }

    50 % {
        transform: translateY(-12px) scale(1.2);
    }
}

@keyframes roomsDotReverse {
    0 %,
        100 % {
            transform: translateY(0);
        }

    50 % {
        transform: translateY(10px);
    }
}

@keyframes roomsLine {
    0 % {
        transform: translateX(-100 %);
    }

    50 % {
        transform: translateX(0);
    }

    100 % {
        transform: translateX(100 %);
    }
}

@keyframes roomsText {
    0 % {
        background- position: 0 % 50 %;
}

50 % {
    background- position: 100 % 50 %;
          }

100 % {
    background- position: 0 % 50 %;
          }
        }

@keyframes roomsBorder {
    0 % {
        background- position: 0 % 50 %;
}

50 % {
    background- position: 100 % 50 %;
          }

100 % {
    background- position: 0 % 50 %;
          }
        }

@keyframes roomsBottomLine {
          from {
        transform: translateX(0);
    }

          to {
        transform: translateX(-50 %);
    }
}

        .animate - rooms - glow {
    animation: roomsGlow 9s ease -in -out infinite;
}

        .animate - rooms - glow - reverse {
    animation: roomsGlow 11s ease -in -out infinite reverse;
}

        .animate - rooms - dot {
    animation: roomsDot 4s ease -in -out infinite;
}

        .animate - rooms - dot - reverse {
    animation: roomsDotReverse 5s ease -in -out infinite;
}

        .animate - rooms - line {
    animation: roomsLine 3s ease -in -out infinite;
}

        .animate - rooms - text {
    animation: roomsText 6s ease infinite;
}

        .animate - rooms - border {
    animation: roomsBorder 7s ease infinite;
}

        .animate - rooms - bottom - line {
    animation: roomsBottomLine 12s linear infinite;
}

@media(prefers - reduced - motion: reduce) {
          .animate - rooms - glow,
          .animate - rooms - glow - reverse,
          .animate - rooms - dot,
          .animate - rooms - dot - reverse,
          .animate - rooms - line,
          .animate - rooms - text,
          .animate - rooms - border,
          .animate - rooms - bottom - line {
        animation: none;
    }
}
`}</style>
    </main>
  );
}

