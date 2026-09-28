import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Heart,
    ArrowRight,
    ShoppingBag,
    Sparkles,
    Trash2,
    Sofa,
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";

export default function Wishlist() {
    const { products, wishlist } = useStore();

    const saved = products.filter((product) =>
        wishlist.includes(product.id)
    );

    return (
        <main className="min-h-screen bg-[#f8f6f1] text-[#25221e]">
            {/* =========================
          HERO / HEADER
      ========================== */}
            <section className="relative overflow-hidden border-b border-[#ded8cc]">
                {/* Decorative background */}
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#c99b5b]/10 blur-3xl" />
                <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#a65d42]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 flex items-center gap-2 text-sm text-[#777067]"
                    >
                        <Link
                            to="/"
                            className="transition-colors hover:text-[#a65d42]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <span className="text-[#25221e]">Wishlist</span>
                    </motion.div>

                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c99b5b]/30 bg-[#c99b5b]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#9a7138]">
                                <Heart size={14} fill="currentColor" />
                                SAVED PIECES
                            </div>

                            <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Pieces you{" "}
                                <span className="italic text-[#a65d42]">
                                    love.
                                </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-[#716b63] sm:text-lg">
                                Keep your favourite furniture close. Your carefully selected
                                pieces are waiting whenever you're ready to bring them home.
                            </p>
                        </motion.div>

                        {/* Wishlist Count */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#c99b5b]/30 bg-white shadow-[0_15px_50px_rgba(60,45,30,0.08)] sm:h-40 sm:w-40"
                        >
                            <Heart
                                size={22}
                                className="mb-1 text-[#a65d42]"
                                fill="currentColor"
                            />

                            <span className="font-serif text-4xl font-semibold">
                                {saved.length}
                            </span>

                            <span className="text-xs uppercase tracking-[0.15em] text-[#81796e]">
                                {saved.length === 1 ? "Piece" : "Pieces"}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =========================
          WISHLIST CONTENT
      ========================== */}
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
                {saved.length > 0 ? (
                    <>
                        {/* Section Top Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 flex flex-col gap-4 border-b border-[#ded8cc] pb-6 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p className="text-sm font-medium text-[#777067]">
                                    YOUR COLLECTION
                                </p>

                                <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
                                    Saved furniture
                                </h2>
                            </div>

                            <Link
                                to="/shop"
                                className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#cfc7ba] bg-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-[#a65d42] hover:bg-[#a65d42] hover:text-white"
                            >
                                Continue shopping
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </motion.div>

                        {/* Product Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="product-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            {saved.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{ y: -5 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Wishlist Bottom Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 grid gap-5 md:grid-cols-3"
                        >
                            {/* Card 1 */}
                            <div className="rounded-3xl border border-[#ded8cc] bg-white p-6">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4eee5] text-[#a65d42]">
                                    <Heart size={20} />
                                </div>

                                <h3 className="font-serif text-xl">
                                    Save your favourites
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#777067]">
                                    Keep the furniture pieces you love in one place for easy
                                    access later.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="rounded-3xl border border-[#ded8cc] bg-white p-6">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4eee5] text-[#a65d42]">
                                    <Sparkles size={20} />
                                </div>

                                <h3 className="font-serif text-xl">
                                    Find your perfect piece
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#777067]">
                                    Compare your saved pieces and choose the one that fits your
                                    space and style.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="rounded-3xl border border-[#ded8cc] bg-white p-6">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4eee5] text-[#a65d42]">
                                    <ShoppingBag size={20} />
                                </div>

                                <h3 className="font-serif text-xl">
                                    Ready when you are
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#777067]">
                                    When you find the right one, head to the product page and
                                    continue with your purchase.
                                </p>
                            </div>
                        </motion.div>

                        {/* Explore More */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#29251f] px-6 py-8 text-white sm:flex-row sm:px-10"
                        >
                            <div>
                                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b477]">
                                    Still looking?
                                </p>

                                <h3 className="font-serif text-2xl sm:text-3xl">
                                    Discover more pieces for your home.
                                </h3>
                            </div>

                            <Link
                                to="/shop"
                                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d5b477] px-6 py-3 text-sm font-semibold text-[#29251f] transition-all duration-300 hover:bg-white"
                            >
                                Explore collection
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </motion.div>
                    </>
                ) : (
                    /* =========================
                       EMPTY WISHLIST
                    ========================== */
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-3xl py-10 text-center"
                    >
                        {/* Icon */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#d8cdbd] bg-white shadow-[0_15px_50px_rgba(60,45,30,0.08)]"
                        >
                            <Heart
                                size={42}
                                strokeWidth={1.3}
                                className="text-[#a65d42]"
                            />
                        </motion.div>

                        <span className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#a17b43]">
                            Your collection is waiting
                        </span>

                        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                            Nothing saved yet.
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#777067]">
                            Your wishlist is currently empty. Explore our collection and
                            save the furniture pieces that make your space feel like home.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                to="/shop"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#a65d42] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#a65d42]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f4e38]"
                            >
                                <ShoppingBag size={17} />
                                Explore the collection
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfc7ba] bg-white px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-[#a65d42] hover:text-[#a65d42]"
                            >
                                Back to home
                            </Link>
                        </div>

                        {/* Empty Wishlist Features */}
                        <div className="mt-16 grid gap-5 text-left sm:grid-cols-3">
                            <div className="rounded-3xl border border-[#ded8cc] bg-white p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4eee5] text-[#a65d42]">
                                    <Heart size={18} />
                                </div>

                                <h3 className="font-serif text-lg">
                                    Save favourites
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#777067]">
                                    Tap the heart on any product to save it here.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#ded8cc] bg-white p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4eee5] text-[#a65d42]">
                                    <Sofa size={18} />
                                </div>

                                <h3 className="font-serif text-lg">
                                    Explore furniture
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#777067]">
                                    Discover sofas, tables, chairs and more for your home.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#ded8cc] bg-white p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4eee5] text-[#a65d42]">
                                    <Sparkles size={18} />
                                </div>

                                <h3 className="font-serif text-lg">
                                    Create your space
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#777067]">
                                    Build a collection of pieces that match your personal
                                    style.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </section>
        </main>
    );
}