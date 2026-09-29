import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories } from "../data";
import { useStore } from "../context/StoreContext";

const categoryShowcase = [
  { name: "Living", subtitle: "Comfort made beautiful", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" },
  { name: "Bedroom", subtitle: "Your everyday retreat", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85" },
  { name: "Dining", subtitle: "Gather around good design", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=85" },
  { name: "Office", subtitle: "Make room for ideas", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" },
];

export default function Collection() {
  const { products = [] } = useStore();
  const [params, setParams] = useSearchParams();
  const room = params.get("room") || "";
  const [category, setCategory] = useState(room || "All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const filterCategories = useMemo(() => [
    "All",
    ...Array.from(new Set([
      ...(Array.isArray(categories) ? categories.filter(Boolean) : []),
      ...products.map(p => p?.category).filter(Boolean),
    ].filter(Boolean))),
  ].filter((value, index, arr) => arr.indexOf(value) === index), [products]);

  const shown = useMemo(() => {
    let result = products.filter(product => {
      const name = String(product?.name || "").toLowerCase();
      const cat = String(product?.category || "");
      const term = search.trim().toLowerCase();
      return (category === "All" || cat === category) && (!term || name.includes(term));
    });
    if (sort === "low") result = [...result].sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    if (sort === "high") result = [...result].sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    return result;
  }, [products, category, search, sort]);

  const selectCategory = (value) => {
    setCategory(value);
    setParams(value === "All" ? {} : { room: value });
    setTimeout(() => document.getElementById("catalogue-products")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F1E8] text-[#24352F]">
      <section className="relative overflow-hidden bg-[#24352F] text-[#F7F1E8]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_.75fr] lg:px-12 lg:py-24">
          <div className="max-w-3xl self-center">
            <p className="text-xs font-bold tracking-[.28em] text-[#D6B77A]">THE 2026 COLLECTION</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Thoughtful pieces.<br /><span className="text-[#D6B77A]">Beautiful living.</span></h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">Discover furniture made to bring comfort, character, and lasting style into every corner of your home.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalogue-products" className="rounded-full bg-[#F7F1E8] px-6 py-3 text-sm font-semibold text-[#24352F] transition hover:-translate-y-0.5">Explore collection ↘</a>
              <Link to="/rooms" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">Explore rooms ↗</Link>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm lg:p-9">
            <span className="text-xs uppercase tracking-[.22em] text-[#D6B77A]">Designed for everyday living</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight">Make space for what matters.</h2>
            <p className="mt-4 text-sm leading-7 text-white/60">Browse one shared catalogue across Home, Rooms and Collection, so every product detail stays consistent.</p>
            <div className="mt-8 flex items-end gap-3"><strong className="text-5xl text-[#D6B77A]">{products.length}</strong><span className="pb-1 text-xs uppercase tracking-[.16em] text-white/50">pieces available</span></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#C47A45]">Shop by room</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Find the feeling you want to come home to.</h2></div>
          <Link to="/rooms" className="text-sm font-semibold text-[#24352F]">View all rooms ↗</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {categoryShowcase.map((item, i) => (
            <button key={item.name} type="button" onClick={() => selectCategory(item.name)} className={`group relative min-h-[190px] overflow-hidden rounded-[24px] text-left sm:min-h-[230px] ${category === item.name ? "ring-2 ring-[#D6B77A]" : ""}`}>
              <img src={item.image} alt={`${item.name} furniture`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24352F] via-[#24352F]/20 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white"><span className="text-[10px] uppercase tracking-[.18em] text-[#D6B77A]">0{i + 1} / Room edit</span><h3 className="mt-1 text-xl font-semibold">{item.name}</h3><p className="mt-1 text-xs text-white/65">{item.subtitle}</p></div>
            </button>
          ))}
        </div>
      </section>

      <section
        id="catalogue-products"
        className="mx-auto max-w-[1500px] scroll-mt-20 px-5 pb-20 sm:px-8 lg:px-12"
      >
        <div className="rounded-[28px] border border-[#24352F]/10 bg-white/50 p-5 sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#C47A45]">
                The full edit
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Explore all pieces</h2>
              <p className="mt-2 text-sm text-[#24352F]/55">
                {shown.length} product{shown.length === 1 ? "" : "s"} matching your
                selection.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search furniture..."
                className="w-full rounded-full border border-[#24352F]/15 bg-[#F7F1E8] px-5 py-3 text-sm outline-none focus:border-[#C47A45] sm:w-64"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-[#24352F]/15 bg-[#F7F1E8] px-5 py-3 text-sm outline-none"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {filterCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => selectCategory(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${category === item
                    ? "bg-[#24352F] text-white"
                    : "border border-[#24352F]/15 bg-[#F7F1E8] text-[#24352F] hover:bg-white"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {shown.length ? (
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {shown.map((product) => (
                <ProductCard
                  key={product.id ?? product._id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#F7F1E8] px-6 py-16 text-center">
              <h3 className="text-xl font-semibold">No products found</h3>
              <p className="mt-2 text-sm text-[#24352F]/55">
                Try another search or category.
              </p>
              <button
                onClick={() => {
                  setCategory("All");
                  setSearch("");
                  setSort("featured");
                  setParams({});
                }}
                className="mt-5 rounded-full bg-[#24352F] px-5 py-3 text-sm font-semibold text-white"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
