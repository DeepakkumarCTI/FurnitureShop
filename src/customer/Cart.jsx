import { useMemo } from "react";
import { Link } from "react-router-dom";
import { initialProducts, money } from "../data";
import { useStore } from "../context/StoreContext";

function AnimatedBorder({ children, className = "" }) {
    return (
        <div className={`animated-border ${className}`}>
            <div className="animated-border-inner">{children}</div>
        </div>
    );
}

export default function Cart() {
    const { cart = [], setCart, addToCart } = useStore();

    const cartItems = useMemo(() => {
        return cart
            .map((item) => {
                const product = initialProducts.find(
                    (product) => String(product.id) === String(item.id)
                );

                if (!product) return null;

                return {
                    ...product,
                    quantity: Math.max(1, Number(item.quantity) || 1),
                };
            })
            .filter(Boolean);
    }, [cart]);

    const subtotal = cartItems.reduce(
        (total, item) => total + Number(item.price || 0) * item.quantity,
        0
    );

    const updateQuantity = (id, change) => {
        setCart((currentCart) =>
            currentCart
                .map((item) => {
                    if (String(item.id) !== String(id)) return item;

                    const quantity = Math.max(
                        1,
                        (Number(item.quantity) || 1) + change
                    );

                    return { ...item, quantity };
                })
                .filter((item) => Number(item.quantity) > 0)
        );
    };

    const removeItem = (id) => {
        setCart((currentCart) =>
            currentCart.filter((item) => String(item.id) !== String(id))
        );
    };

    const recommendations = initialProducts
        .filter(
            (product) =>
                !cartItems.some((item) => String(item.id) === String(product.id))
        )
        .slice(0, 3);

    const handleAddToCart = (product) => {
        if (addToCart) {
            addToCart(product);
            return;
        }

        setCart((currentCart) => {
            const existingItem = currentCart.find(
                (item) => String(item.id) === String(product.id)
            );

            if (existingItem) {
                return currentCart.map((item) =>
                    String(item.id) === String(product.id)
                        ? { ...item, quantity: (Number(item.quantity) || 1) + 1 }
                        : item
                );
            }

            return [...currentCart, { id: product.id, quantity: 1 }];
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f7f5f0] via-white to-[#edf4f3] px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                {/* Page heading */}
                <section className="mb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Your selected furniture
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                                Shopping Cart
                            </h1>
                            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                                Make your space feel like home. Review your selected pieces
                                before moving to checkout.
                            </p>
                        </div>

                        <Link
                            to="/shop"
                            className="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700"
                        >
                            Continue Shopping
                            <span className="ml-2" aria-hidden="true">
                                →
                            </span>
                        </Link>
                    </div>
                </section>

                {cartItems.length === 0 ? (
                    <AnimatedBorder className="mx-auto max-w-3xl">
                        <div className="rounded-[1.4rem] bg-white px-6 py-14 text-center sm:px-12">
                            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-teal-100">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6"
                                    />
                                    <circle cx="10" cy="20" r="1" />
                                    <circle cx="18" cy="20" r="1" />
                                </svg>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                Your cart is waiting for something beautiful
                            </h2>
                            <p className="mx-auto mt-3 max-w-md text-slate-600">
                                Explore our collection and find furniture that fits your style.
                            </p>

                            <Link
                                to="/shop"
                                className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                Explore Collection
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </div>
                    </AnimatedBorder>
                ) : (
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                        {/* Cart items */}
                        <section className="space-y-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-slate-900">
                                    Cart Items
                                </h2>
                                <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                                    {cartItems.length}{" "}
                                    {cartItems.length === 1 ? "item" : "items"}
                                </span>
                            </div>

                            {cartItems.map((item) => (
                                <AnimatedBorder key={item.id}>
                                    <article className="flex flex-col gap-5 rounded-[1.4rem] bg-white p-4 sm:flex-row sm:items-center sm:p-5">
                                        <Link
                                            to={`/product/${encodeURIComponent(String(item.id))}`}
                                            className="group flex h-44 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#f2eee6] to-[#e4ece8] sm:h-36 sm:w-40"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-110"
                                            />
                                        </Link>

                                        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                                            <div>
                                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                                    {item.category && (
                                                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                                                            {item.category}
                                                        </span>
                                                    )}
                                                    {item.badge && (
                                                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                <Link
                                                    to={`/product/${encodeURIComponent(String(item.id))}`}
                                                    className="text-lg font-bold text-slate-900 transition hover:text-emerald-700 sm:text-xl"
                                                >
                                                    {item.name}
                                                </Link>

                                                {item.description && (
                                                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                                                    <button
                                                        type="button"
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        disabled={item.quantity <= 1}
                                                        aria-label={`Decrease quantity of ${item.name}`}
                                                        className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-slate-700 transition hover:bg-white hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-30"
                                                    >
                                                        −
                                                    </button>

                                                    <span className="min-w-10 text-center text-sm font-bold text-slate-900">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        aria-label={`Increase quantity of ${item.name}`}
                                                        className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-slate-700 transition hover:bg-white hover:text-emerald-700"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-sm font-semibold text-rose-600 transition hover:text-rose-800"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className="border-t border-slate-100 pt-4 text-left sm:min-w-28 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 sm:text-right">
                                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                Item total
                                            </p>
                                            <p className="mt-1 text-xl font-black text-slate-900">
                                                {money(Number(item.price || 0) * item.quantity)}
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500">
                                                {money(Number(item.price || 0))} each
                                            </p>
                                        </div>
                                    </article>
                                </AnimatedBorder>
                            ))}
                        </section>

                        {/* Order summary */}
                        <aside className="lg:sticky lg:top-24">
                            <AnimatedBorder>
                                <div className="rounded-[1.4rem] bg-white p-5 sm:p-6">
                                    <div className="mb-5 flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-slate-900">
                                            Order Summary
                                        </h2>
                                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                                            Secure checkout
                                        </span>
                                    </div>

                                    <div className="space-y-4 text-sm">
                                        <div className="flex items-center justify-between gap-3 text-slate-600">
                                            <span>Subtotal</span>
                                            <span className="font-semibold text-slate-900">
                                                {money(subtotal)}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 text-slate-600">
                                            <span>Shipping</span>
                                            <span className="font-semibold text-emerald-700">
                                                Free
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 text-slate-600">
                                            <span>Taxes</span>
                                            <span className="font-medium text-slate-900">
                                                Calculated at checkout
                                            </span>
                                        </div>
                                    </div>

                                    <div className="my-5 border-t border-dashed border-slate-300" />

                                    <div className="flex items-end justify-between gap-3">
                                        <div>
                                            <p className="text-sm font-medium text-slate-500">
                                                Estimated total
                                            </p>
                                            <p className="mt-1 text-3xl font-black tracking-tight text-slate-900">
                                                {money(subtotal)}
                                            </p>
                                        </div>
                                        <span className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                                            Free delivery
                                        </span>
                                    </div>

                                    <Link
                                        to="/checkout"
                                        className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-6 py-4 text-center font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        Proceed to Checkout
                                        <span className="ml-2" aria-hidden="true">
                                            →
                                        </span>
                                    </Link>

                                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4 text-emerald-600"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            aria-hidden="true"
                                        >
                                            <rect x="5" y="10" width="14" height="11" rx="2" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8 10V7a4 4 0 0 1 8 0v3"
                                            />
                                        </svg>
                                        Your order details are protected
                                    </div>
                                </div>
                            </AnimatedBorder>
                        </aside>
                    </div>
                )}

                {/* Recommendations */}
                {recommendations.length > 0 && (
                    <section className="mt-16">
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                                    Curated for you
                                </p>
                                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                                    Complete Your Space
                                </h2>
                                <p className="mt-2 text-slate-600">
                                    Discover more pieces that complement your style.
                                </p>
                            </div>

                            <Link
                                to="/shop"
                                className="w-fit font-bold text-emerald-700 transition hover:text-teal-700"
                            >
                                View All Products →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {recommendations.map((product) => (
                                <AnimatedBorder key={product.id}>
                                    <article className="overflow-hidden rounded-[1.4rem] bg-white">
                                        <Link
                                            to={`/product/${encodeURIComponent(String(product.id))}`}
                                            className="group flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-[#f3eee5] to-[#e6efeb] p-5"
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                                            />
                                        </Link>

                                        <div className="p-5">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <Link
                                                        to={`/product/${encodeURIComponent(String(product.id))}`}
                                                        className="font-bold text-slate-900 transition hover:text-emerald-700"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                    {product.category && (
                                                        <p className="mt-1 text-sm text-slate-500">
                                                            {product.category}
                                                        </p>
                                                    )}
                                                </div>

                                                <span className="whitespace-nowrap font-black text-emerald-700">
                                                    {money(Number(product.price || 0))}
                                                </span>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => handleAddToCart(product)}
                                                className="mt-5 w-full rounded-full border border-emerald-600 px-5 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </article>
                                </AnimatedBorder>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Animated gradient border styles */}
            <style>{`
        .animated-border {
          position: relative;
          padding: 2px;
          border-radius: 1.55rem;
          background: linear-gradient(
            120deg,
            #10b981,
            #06b6d4,
            #6366f1,
            #f59e0b,
            #10b981
          );
          background-size: 300% 300%;
          animation: cartBorderFlow 7s ease infinite;
          transition: transform 250ms ease, box-shadow 250ms ease;
        }

        .animated-border:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(15, 118, 110, 0.12);
        }

        .animated-border-inner {
          height: 100%;
          overflow: hidden;
          border-radius: calc(1.55rem - 2px);
          background: white;
        }

        @keyframes cartBorderFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-border {
            animation: none;
            transition: none;
          }

          .animated-border:hover {
            transform: none;
          }
        }
      `}</style>
        </main>
    );
}