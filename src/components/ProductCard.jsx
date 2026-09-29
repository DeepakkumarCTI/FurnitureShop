
import React from "react";
import { Link } from "react-router-dom";
import { money } from "../data";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const {
    wishlist = [],
    addToCart,
    toggleWishlist
  } = useStore();

  if (!product) return null;

  const productId = product.id ?? product._id ?? product.slug;

  const saved = wishlist.some(
    item =>
      String(
        typeof item === "object"
          ? item?.id ?? item?._id
          : item
      ) === String(productId)
  );

  return (
    <article className="group relative flex h-full min-w-0 overflow-hidden rounded-[18px] p-[2px] sm:rounded-[26px]">

      {/* Rainbow Animated Border */}
      <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] bg-[length:500%_500%] animate-product-card-border sm:rounded-[26px]" />

      {/* Main Card */}
      <div className="relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[16px] bg-[#F7F1E8] sm:rounded-[24px]">

        {/* Product Image */}
        <Link
          to={`/product/${encodeURIComponent(String(productId))}`}
          className="relative block overflow-hidden bg-[#E8DED0]"
        >
          <div className="aspect-[3/4] overflow-hidden sm:aspect-[4/5]">

            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24352F]/40 via-transparent to-transparent" />

            {/* Category */}
            <span className="absolute left-2 top-2 max-w-[calc(100%-16px)] truncate rounded-full bg-[#24352F]/90 px-2 py-1 text-[8px] font-semibold tracking-[.08em] text-[#F7F1E8] sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[.16em]">
              {product.category}
            </span>

            {/* Product Tag */}
            {product.tag && (
              <span className="absolute bottom-2 left-2 max-w-[calc(100%-16px)] truncate rounded-full bg-[#D6B77A] px-2 py-1 text-[8px] font-bold uppercase tracking-[.08em] text-[#24352F] sm:bottom-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[.12em]">
                {product.tag}
              </span>
            )}

          </div>
        </Link>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            saved
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition hover:scale-110 sm:right-4 sm:top-4 sm:h-10 sm:w-10 ${saved
              ? "bg-[#ff004c] text-white"
              : "bg-[#F7F1E8]/90 text-[#24352F]"
            }`}
        >
          <span className="text-lg sm:text-xl">
            {saved ? "♥" : "♡"}
          </span>
        </button>

        {/* Product Details */}
        <div className="flex flex-1 flex-col p-3 sm:p-6">

          {/* Product Name */}
          <Link
            to={`/product/${encodeURIComponent(String(productId))}`}
          >
            <h3 className="line-clamp-2 text-sm font-semibold leading-5 tracking-tight text-[#24352F] transition-colors group-hover:text-[#C47A45] sm:text-lg sm:leading-normal">
              {product.name}
            </h3>
          </Link>

          {/* Product Description */}
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-[#24352F]/55 sm:mt-2 sm:text-sm sm:leading-6">
            {product.desc}
          </p>

          {/* Price */}
          <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-3 sm:gap-3 sm:pt-5">

            <p className="text-sm font-semibold text-[#24352F] sm:text-lg">
              {money(product.price)}
            </p>

            {product.oldPrice > product.price && (
              <del className="text-[10px] text-[#24352F]/35 sm:text-xs">
                {money(product.oldPrice)}
              </del>
            )}

          </div>

          {/* Add to Bag */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-3 rounded-full bg-[#24352F] px-2 py-2.5 text-[11px] font-semibold text-[#F7F1E8] transition hover:-translate-y-0.5 hover:bg-[#315d50] sm:mt-5 sm:px-5 sm:py-3 sm:text-sm"
          >
            Add to bag ↗
          </button>

        </div>

      </div>

    </article>
  );
}