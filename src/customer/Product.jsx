
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { money, initialProducts as dataProducts } from "../data";
import { useStore } from "../context/StoreContext";

export default function Product() {
  const { id } = useParams();
  const location = useLocation();

  const {
    products: storeProducts = [],
    wishlist = [],
    toggleWishlist,
    addToCart,
  } = useStore();

  /*
   * Use StoreContext products when available.
   * If StoreContext has not loaded products yet, use data.js products.
   */
  const products =
    Array.isArray(storeProducts) && storeProducts.length > 0
      ? storeProducts
      : Array.isArray(dataProducts)
        ? dataProducts
        : [];

  /*
   * Product URL can contain:
   * /product/1
   * /product/"1"
   * /product/product-slug
   *
   * Support id, _id and slug.
   */
  // App.jsx renders pages from useLocation rather than <Routes>, so useParams()
  // may be empty. Read the product ID from the current URL as a reliable fallback.
  const pathSegment = location.pathname.split("/").filter(Boolean).at(-1) ?? "";
  let decodedPathSegment = pathSegment;
  try {
    decodedPathSegment = decodeURIComponent(pathSegment);
  } catch {
    // Keep the original segment if it contains malformed URL encoding.
  }
  const routeId = String(id ?? decodedPathSegment).trim();

  const product = products.find((item) => {
    if (!item) return false;

    const itemId = String(item.id ?? "").trim();
    const mongoId = String(item._id ?? "").trim();
    const slug = String(item.slug ?? "").trim();

    return (
      itemId === routeId ||
      mongoId === routeId ||
      slug === routeId
    );
  });

  /*
   * Wishlist can contain:
   * [1, 2, 3]
   *
   * or:
   * [{ id: 1 }, { id: 2 }]
   */
  const saved = wishlist.some((item) => {
    const wishlistId =
      typeof item === "object"
        ? item?.id ?? item?._id
        : item;

    return String(wishlistId ?? "").trim() === String(product?.id ?? "").trim();
  });

  /*
   * Debug information.
   *
   * Open browser console and check:
   *
   * Product URL ID:
   * Available products:
   * Found product:
   */
  /*
   * ----------------------------------------------------
   * PRODUCT NOT FOUND
   * ----------------------------------------------------
   */
  if (!product) {
    return (
      <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#F7F1E8] px-4 py-16 sm:px-6">

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[conic-gradient(#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] opacity-10 blur-3xl animate-product-error-glow" />

        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[conic-gradient(#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)] opacity-10 blur-3xl animate-product-error-glow-reverse" />

        {/* Card */}
        <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] p-[2px]">

          {/* Rainbow border */}
          <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] bg-[length:500%_500%] animate-product-error-border" />

          <div className="relative rounded-[30px] bg-[#24352F] px-6 py-12 text-center sm:px-10 sm:py-14">

            <span className="text-xs font-bold tracking-[0.25em] text-[#D6B77A]">
              FORMA FURNITURE
            </span>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#F7F1E8] sm:text-4xl">
              Product not found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#F7F1E8]/65">
              We couldn't find the furniture item you're looking for.
              Please return to the collection and choose a product.
            </p>

            <div className="mt-4 rounded-2xl bg-[#F7F1E8]/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#F7F1E8]/40">
                Requested product
              </p>

              <p className="mt-1 break-all text-sm font-medium text-[#F7F1E8]/70">
                {routeId || "No product ID"}
              </p>
            </div>

            <Link
              to="/shop"
              className="group relative mt-8 inline-flex overflow-hidden rounded-full bg-[#F7F1E8] px-7 py-3.5 text-sm font-semibold text-[#24352F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="relative z-10">
                Back to collection ↗
              </span>

              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>

        <style>{`
@keyframes productErrorBorder {
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

@keyframes productErrorGlow {
    0 %,
        100 % {
            transform: scale(1) rotate(0deg);
        }

    50 % {
        transform: scale(1.12) rotate(25deg);
    }
}

          .animate - product - error - border {
    animation: productErrorBorder 7s ease infinite;
}

          .animate - product - error - glow {
    animation: productErrorGlow 8s ease -in -out infinite;
}

          .animate - product - error - glow - reverse {
    animation: productErrorGlow 10s ease -in -out infinite reverse;
}

@media(prefers - reduced - motion: reduce) {
            .animate - product - error - border,
            .animate - product - error - glow,
            .animate - product - error - glow - reverse {
        animation: none;
    }
}
`}</style>
      </main>
    );
  }

  /*
   * ----------------------------------------------------
   * PRODUCT PAGE
   * ----------------------------------------------------
   */
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F7F1E8]">

      {/* Background rainbow glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[conic-gradient(from_90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] opacity-[0.10] blur-3xl animate-product-bg-glow" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[conic-gradient(from_180deg,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff)] opacity-[0.08] blur-3xl animate-product-bg-glow-reverse" />

      {/* Decorative dots */}
      <span className="pointer-events-none absolute right-[8%] top-[18%] h-3 w-3 rounded-full bg-[#ff004c] opacity-70 animate-product-dot" />

      <span className="pointer-events-none absolute right-[12%] top-[23%] h-2 w-2 rounded-full bg-[#00cfff] opacity-70 animate-product-dot-reverse" />

      <span className="pointer-events-none absolute bottom-[18%] left-[7%] h-3 w-3 rounded-full bg-[#9b4dff] opacity-70 animate-product-dot" />

      <span className="pointer-events-none absolute bottom-[25%] left-[11%] h-2 w-2 rounded-full bg-[#ffe600] opacity-70 animate-product-dot-reverse" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16 xl:px-14">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 overflow-hidden text-xs font-medium tracking-[0.12em] text-[#24352F]/55 sm:mb-10">

          <Link
            to="/"
            className="shrink-0 transition-colors duration-300 hover:text-[#24352F]"
          >
            HOME
          </Link>

          <span>/</span>

          <Link
            to="/shop"
            className="shrink-0 transition-colors duration-300 hover:text-[#24352F]"
          >
            COLLECTION
          </Link>

          <span>/</span>

          <span className="truncate text-[#24352F]/80">
            {product.name}
          </span>
        </div>

        {/* Product layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">

          {/* Product image */}
          <div className="group relative">

            {/* Rainbow border */}
            <div className="absolute -inset-[3px] rounded-[34px] bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] bg-[length:500%_500%] animate-product-rainbow-border" />

            {/* Rainbow glow */}
            <div className="absolute -inset-6 rounded-[45px] bg-[conic-gradient(from_90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] opacity-20 blur-2xl animate-product-image-glow" />

            {/* Image card */}
            <div className="relative overflow-hidden rounded-[31px] bg-[#24352F] p-2 shadow-[0_25px_70px_rgba(36,53,47,0.2)]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[25px] bg-[#E8DED0] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#24352F]/55 via-transparent to-[#24352F]/5" />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-20" />

                {/* Category */}
                <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                  <div className="relative overflow-hidden rounded-full bg-[#24352F]/90 px-4 py-2 backdrop-blur-md">

                    <span className="relative z-10 text-[10px] font-semibold tracking-[0.2em] text-[#F7F1E8]">
                      {product.category}
                    </span>

                    <span className="absolute inset-0 bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] opacity-20" />
                  </div>
                </div>

                {/* Number */}
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6">

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F1E8]/95 text-xs font-semibold text-[#24352F] shadow-lg backdrop-blur-md">

                    <span className="absolute -inset-[2px] -z-10 rounded-full bg-[conic-gradient(#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] animate-product-badge-spin" />

                    01
                  </div>
                </div>

                {/* Shine */}
                <div className="pointer-events-none absolute inset-y-0 -left-[120%] w-[70%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
              </div>
            </div>
          </div>

          {/* Product information */}
          <div className="relative">

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -right-8 -top-10 hidden h-24 w-24 rounded-full border-[3px] border-transparent bg-[linear-gradient(#F7F1E8,#F7F1E8)_padding-box,conic-gradient(#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)_border-box] opacity-60 animate-product-ring lg:block" />

            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-3">

              <span className="text-xs font-bold tracking-[0.22em] text-[#24352F]">
                {product.category} · FORMA EDIT
              </span>

              <span className="h-[2px] w-16 overflow-hidden rounded-full bg-[#24352F]/10">
                <span className="block h-full w-full bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] animate-product-line" />
              </span>
            </div>

            {/* Product name */}
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[#24352F] sm:text-5xl lg:text-6xl xl:text-7xl">
              {product.name}
            </h1>

            {/* Rainbow underline */}
            <div className="mt-5 h-1 w-28 overflow-hidden rounded-full">
              <div className="h-full w-[250%] rounded-full bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] animate-product-line-long" />
            </div>

            {/* Price */}
            <div className="mt-7 flex items-end gap-3">

              <span className="text-3xl font-semibold tracking-tight text-[#24352F] sm:text-4xl">
                {money(product.price)}
              </span>

              <span className="pb-1 text-xs font-medium tracking-[0.15em] text-[#24352F]/45">
                INCL. TAX
              </span>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[#24352F]/70 sm:text-lg">
              {product.desc}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#24352F]/55">
              Designed to pair easily with natural textures, warm colour and everyday routines.
            </p>

            {/* Feature chips */}
            <div className="mt-7 flex flex-wrap gap-2">

              <span className="rounded-full border border-[#ff004c]/25 bg-[#ff004c]/5 px-4 py-2 text-xs font-medium text-[#24352F]">
                Timeless form
              </span>

              <span className="rounded-full border border-[#ff7a00]/25 bg-[#ff7a00]/5 px-4 py-2 text-xs font-medium text-[#24352F]">
                Warm finish
              </span>

              <span className="rounded-full border border-[#00cfff]/25 bg-[#00cfff]/5 px-4 py-2 text-xs font-medium text-[#24352F]">
                Everyday comfort
              </span>

            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">

              {/* Add to bag */}
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="group relative isolate overflow-hidden rounded-full bg-[#24352F] px-8 py-4 text-sm font-semibold text-[#F7F1E8] shadow-[0_15px_35px_rgba(36,53,47,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(36,53,47,0.25)]"
              >
                <span className="absolute inset-0 -z-10 translate-x-[-110%] bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3)] transition-transform duration-700 group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  Add to bag

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>

                <span className="absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[130%]" />
              </button>

              {/* Wishlist */}
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className={`group relative overflow - hidden rounded - full border - 2 px - 7 py - 3.5 text - sm font - semibold transition - all duration - 300 hover: -translate - y - 1 ${
    saved
        ? "border-[#ff004c]/40 bg-[#ff004c]/5 text-[#24352F]"
        : "border-[#24352F]/15 bg-white/30 text-[#24352F] hover:border-[#24352F]/40"
} `}
              >
                <span className="relative z-10">
                  {saved
                    ? "♥ Saved to wishlist"
                    : "♡ Add to wishlist"}
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#ff004c]/10 via-[#00cfff]/10 to-[#9b4dff]/10 transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </div>

            {/* Reassurance */}
            <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 border-t border-[#24352F]/10 pt-6 sm:grid-cols-3">

              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-[#24352F]">
                  CURATED
                </p>

                <p className="mt-1 text-xs text-[#24352F]/50">
                  Thoughtfully selected
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-[#24352F]">
                  QUALITY
                </p>

                <p className="mt-1 text-xs text-[#24352F]/50">
                  Made for everyday living
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-[#24352F]">
                  FORMA
                </p>

                <p className="mt-1 text-xs text-[#24352F]/50">
                  Designed with character
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom rainbow divider */}
        <div className="mt-14 h-[3px] w-full overflow-hidden rounded-full opacity-70 sm:mt-20">
          <div className="h-full w-[200%] bg-[linear-gradient(90deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] animate-product-bottom-line" />
        </div>
      </div>

      <style>{`
@keyframes productRainbowBorder {
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

@keyframes productBgGlow {
    0 %,
        100 % {
            transform: scale(1) rotate(0deg);
            opacity: 0.08;
        }

    50 % {
        transform: scale(1.12) rotate(25deg);
            opacity: 0.14;
    }
}

@keyframes productImageGlow {
    0 %,
        100 % {
            transform: scale(0.96);
            opacity: 0.16;
        }

    50 % {
        transform: scale(1.03);
        opacity: 0.28;
    }
}

@keyframes productBadgeSpin {
          from {
        transform: rotate(0deg);
    }

          to {
        transform: rotate(360deg);
    }
}

@keyframes productRing {
    0 %,
        100 % {
            transform: rotate(0deg) scale(1);
        }

    50 % {
        transform: rotate(180deg) scale(1.08);
    }
}

@keyframes productDot {
    0 %,
        100 % {
            transform: translateY(0) scale(1);
        }

    50 % {
        transform: translateY(-12px) scale(1.2);
    }
}

@keyframes productDotReverse {
    0 %,
        100 % {
            transform: translateY(0) scale(1);
        }

    50 % {
        transform: translateY(10px) scale(0.8);
    }
}

@keyframes productLine {
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

@keyframes productLineLong {
    0 % {
        transform: translateX(-35 %);
    }

    50 % {
        transform: translateX(0);
    }

    100 % {
        transform: translateX(-35 %);
    }
}

@keyframes productBottomLine {
          from {
        transform: translateX(0);
    }

          to {
        transform: translateX(-50 %);
    }
}

        .animate - product - rainbow - border {
    animation: productRainbowBorder 7s ease infinite;
}

        .animate - product - bg - glow {
    animation: productBgGlow 8s ease -in -out infinite;
}

        .animate - product - bg - glow - reverse {
    animation: productBgGlow 10s ease -in -out infinite reverse;
}

        .animate - product - image - glow {
    animation: productImageGlow 5s ease -in -out infinite;
}

        .animate - product - badge - spin {
    animation: productBadgeSpin 7s linear infinite;
}

        .animate - product - ring {
    animation: productRing 9s ease -in -out infinite;
}

        .animate - product - dot {
    animation: productDot 4s ease -in -out infinite;
}

        .animate - product - dot - reverse {
    animation: productDotReverse 5s ease -in -out infinite;
}

        .animate - product - line {
    animation: productLine 3s ease -in -out infinite;
}

        .animate - product - line - long {
    animation: productLineLong 5s ease -in -out infinite;
}

        .animate - product - bottom - line {
    animation: productBottomLine 12s linear infinite;
}

@media(prefers - reduced - motion: reduce) {
          .animate - product - rainbow - border,
          .animate - product - bg - glow,
          .animate - product - bg - glow - reverse,
          .animate - product - image - glow,
          .animate - product - badge - spin,
          .animate - product - ring,
          .animate - product - dot,
          .animate - product - dot - reverse,
          .animate - product - line,
          .animate - product - line - long,
          .animate - product - bottom - line {
        animation: none;
    }
}
`}</style>
    </main>
  );
}

