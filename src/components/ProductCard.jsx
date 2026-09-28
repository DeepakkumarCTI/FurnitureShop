import React from "react";
import { Link } from "react-router-dom";
import { money } from "../data";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { wishlist = [], addToCart, toggleWishlist } = useStore();
  if (!product) return null;
  const productId = product.id ?? product._id ?? product.slug;
  const saved = wishlist.some(item => String(typeof item === "object" ? item?.id ?? item?._id : item) === String(productId));

  return (
    <article className="group relative flex h-full overflow-hidden rounded-[26px] p-[2px]">
      <div className="absolute inset-0 rounded-[26px] bg-[linear-gradient(120deg,#ff004c,#ff7a00,#ffe600,#35d07f,#00cfff,#4169ff,#9b4dff,#ff2fb3,#ff004c)] bg-[length:500%_500%] animate-product-card-border" />
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[24px] bg-[#F7F1E8]">
        <Link to={`/product/${encodeURIComponent(String(productId))}`} className="relative block overflow-hidden bg-[#E8DED0]">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24352F]/40 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-[#24352F]/90 px-3 py-1.5 text-[10px] font-semibold tracking-[.16em] text-[#F7F1E8]">{product.category}</span>
            {product.tag && <span className="absolute bottom-4 left-4 rounded-full bg-[#D6B77A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-[#24352F]">{product.tag}</span>}
          </div>
        </Link>
        <button type="button" onClick={() => toggleWishlist(product)} aria-label={saved ? "Remove from wishlist" : "Add to wishlist"} className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition hover:scale-110 ${saved ? "bg-[#ff004c] text-white" : "bg-[#F7F1E8]/90 text-[#24352F]"}`}>{saved ? "♥" : "♡"}</button>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <Link to={`/product/${encodeURIComponent(String(productId))}`}><h3 className="text-lg font-semibold tracking-tight text-[#24352F] transition-colors group-hover:text-[#C47A45]">{product.name}</h3></Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#24352F]/55">{product.desc}</p>
          <div className="mt-auto flex items-center justify-between gap-3 pt-5"><p className="text-lg font-semibold text-[#24352F]">{money(product.price)}</p>{product.oldPrice > product.price && <del className="text-xs text-[#24352F]/35">{money(product.oldPrice)}</del>}</div>
          <button type="button" onClick={() => addToCart(product)} className="mt-5 rounded-full bg-[#24352F] px-5 py-3 text-sm font-semibold text-[#F7F1E8] transition hover:-translate-y-0.5 hover:bg-[#315d50]">Add to bag ↗</button>
        </div>
      </div>
    </article>
  );
}
