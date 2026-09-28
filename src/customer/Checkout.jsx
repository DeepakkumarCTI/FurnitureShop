import React, { useState } from "react";
import { Link } from "react-router-dom";
import { money } from "../data";
import { useStore } from "../context/StoreContext";

function AnimatedBorder({ children, className = "" }) {
    return (
        <div className={`checkout-border ${className}`}>
            <div className="checkout-border-inner">{children}</div>
        </div>
    );
}

export default function Checkout() {
    const { cart = [], setCart, cartTotal = 0, setOrders } = useStore();
    const [done, setDone] = useState(null);
    const [placingOrder, setPlacingOrder] = useState(false);

    function submit(e) {
        e.preventDefault();

        if (!cart.length || placingOrder) return;

        const form = new FormData(e.currentTarget);

        const order = {
            id: `FM${Date.now().toString().slice(-7)}`,
            name: form.get("name"),
            email: form.get("email"),
            phone: form.get("phone"),
            address: form.get("address"),
            items: cart,
            total: cartTotal,
            status: "Received",
            date: new Date().toLocaleDateString(),
        };

        setPlacingOrder(true);

        setOrders((orders) => [order, ...orders]);
        setCart([]);
        setDone(order);
        setPlacingOrder(false);
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f8f5ef] via-white to-[#eaf3ef] px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                {done ? (
                    <section className="mx-auto max-w-3xl">
                        <AnimatedBorder>
                            <div className="rounded-[1.5rem] bg-white px-6 py-12 text-center sm:px-12 sm:py-16">
                                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-12 w-12 text-emerald-700"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="m5 12 4 4L19 6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                                    Order received
                                </span>

                                <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                                    Thank you, {done.name}!
                                </h1>

                                <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
                                    Your furniture order has been saved successfully. This is a
                                    demo checkout, so no payment has been collected.
                                </p>

                                <div className="mx-auto mt-8 max-w-md rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-5 text-left">
                                    <div className="flex items-center justify-between gap-4 border-b border-emerald-100 pb-4">
                                        <span className="text-sm text-slate-600">Order number</span>
                                        <span className="font-bold text-slate-900">{done.id}</span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 pt-4">
                                        <span className="text-sm text-slate-600">Order total</span>
                                        <span className="text-xl font-black text-emerald-700">
                                            {money(done.total)}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between gap-4">
                                        <span className="text-sm text-slate-600">Status</span>
                                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                                            {done.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                    <Link
                                        to="/shop"
                                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        Continue Shopping
                                        <span className="ml-2" aria-hidden="true">
                                            →
                                        </span>
                                    </Link>

                                    <Link
                                        to="/"
                                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
                                    >
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </AnimatedBorder>
                    </section>
                ) : (
                    <>
                        {/* Page heading */}
                        <section className="mb-10">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Almost yours
                            </div>

                            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                                Checkout
                            </h1>

                            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                                Add your delivery details and review your furniture order
                                before placing your demo order.
                            </p>
                        </section>

                        {!cart.length ? (
                            <AnimatedBorder className="mx-auto max-w-3xl">
                                <div className="rounded-[1.4rem] bg-white px-6 py-12 text-center sm:px-10">
                                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-10 w-10 text-emerald-700"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <circle cx="10" cy="20" r="1" />
                                            <circle cx="18" cy="20" r="1" />
                                        </svg>
                                    </div>

                                    <h2 className="text-2xl font-black text-slate-900">
                                        Your cart is empty
                                    </h2>

                                    <p className="mt-3 text-slate-600">
                                        Add some furniture to your cart before checking out.
                                    </p>

                                    <Link
                                        to="/shop"
                                        className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3.5 font-bold text-white transition hover:-translate-y-1"
                                    >
                                        Browse Furniture
                                        <span className="ml-2" aria-hidden="true">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </AnimatedBorder>
                        ) : (
                            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
                                {/* Delivery form */}
                                <section>
                                    <AnimatedBorder>
                                        <div className="rounded-[1.4rem] bg-white p-5 sm:p-8">
                                            <div className="mb-7 flex items-start gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.7"
                                                        aria-hidden="true"
                                                    >
                                                        <circle cx="12" cy="8" r="4" />
                                                        <path
                                                            d="M4 21a8 8 0 0 1 16 0"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                                                        Delivery Information
                                                    </h2>
                                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                                        Enter the details for your order delivery.
                                                    </p>
                                                </div>
                                            </div>

                                            <form className="space-y-5" onSubmit={submit}>
                                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                                    <label className="block">
                                                        <span className="mb-2 block text-sm font-semibold text-slate-700">
                                                            Full name
                                                        </span>
                                                        <input
                                                            name="name"
                                                            required
                                                            autoComplete="name"
                                                            placeholder="Enter your full name"
                                                            className="checkout-input"
                                                        />
                                                    </label>

                                                    <label className="block">
                                                        <span className="mb-2 block text-sm font-semibold text-slate-700">
                                                            Phone number
                                                        </span>
                                                        <input
                                                            name="phone"
                                                            required
                                                            type="tel"
                                                            autoComplete="tel"
                                                            pattern="[0-9+() -]{7,}"
                                                            placeholder="Enter phone number"
                                                            className="checkout-input"
                                                        />
                                                    </label>
                                                </div>

                                                <label className="block">
                                                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                                                        Email address
                                                    </span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        autoComplete="email"
                                                        placeholder="you@example.com"
                                                        className="checkout-input"
                                                    />
                                                </label>

                                                <label className="block">
                                                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                                                        Delivery address
                                                    </span>
                                                    <textarea
                                                        name="address"
                                                        required
                                                        rows="4"
                                                        autoComplete="street-address"
                                                        placeholder="House / apartment, street, area, city, state, PIN code"
                                                        className="checkout-input resize-y"
                                                    />
                                                </label>

                                                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                                                    <div className="flex gap-3">
                                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                className="h-5 w-5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.8"
                                                                aria-hidden="true"
                                                            >
                                                                <circle cx="12" cy="12" r="9" />
                                                                <path
                                                                    d="M12 11v5m0-8h.01"
                                                                    strokeLinecap="round"
                                                                />
                                                            </svg>
                                                        </span>

                                                        <div>
                                                            <p className="font-bold text-amber-900">
                                                                Demo checkout
                                                            </p>
                                                            <p className="mt-1 text-sm leading-6 text-amber-800">
                                                                This project does not collect payments. Your
                                                                order will be saved as a demo order.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={placingOrder}
                                                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                                                >
                                                    {placingOrder ? "Placing Order..." : "Place Demo Order"}
                                                    <span className="ml-2" aria-hidden="true">
                                                        →
                                                    </span>
                                                </button>

                                                <p className="text-center text-xs leading-5 text-slate-500">
                                                    By placing your order, you confirm that the delivery
                                                    details above are correct.
                                                </p>
                                            </form>
                                        </div>
                                    </AnimatedBorder>
                                </section>

                                {/* Order summary */}
                                <aside className="lg:sticky lg:top-24">
                                    <AnimatedBorder>
                                        <div className="rounded-[1.4rem] bg-white p-5 sm:p-6">
                                            <div className="mb-6 flex items-center justify-between gap-3">
                                                <h2 className="text-xl font-bold text-slate-900">
                                                    Your Order
                                                </h2>
                                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                                                    {cart.length}{" "}
                                                    {cart.length === 1 ? "item" : "items"}
                                                </span>
                                            </div>

                                            <div className="space-y-4">
                                                {cart.map((item, index) => {
                                                    const quantity = Math.max(
                                                        1,
                                                        Number(item.quantity) || 1
                                                    );
                                                    const itemTotal =
                                                        Number(item.price || 0) * quantity;

                                                    return (
                                                        <div
                                                            key={`${item.id}-${index}`}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#f2eee6] to-[#e4ece8]">
                                                                {item.image ? (
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name || "Furniture"}
                                                                        className="h-full w-full object-contain p-1"
                                                                    />
                                                                ) : (
                                                                    <span className="text-xs text-slate-400">
                                                                        Image
                                                                    </span>
                                                                )}

                                                                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-900 px-1 text-[10px] font-bold text-white">
                                                                    {quantity}
                                                                </span>
                                                            </div>

                                                            <div className="min-w-0 flex-1">
                                                                <p className="truncate text-sm font-bold text-slate-900">
                                                                    {item.name || "Furniture item"}
                                                                </p>
                                                                <p className="mt-1 text-xs text-slate-500">
                                                                    Qty: {quantity}
                                                                </p>
                                                            </div>

                                                            <p className="shrink-0 text-sm font-bold text-slate-900">
                                                                {money(itemTotal)}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className="my-6 border-t border-dashed border-slate-300" />

                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between gap-3 text-slate-600">
                                                    <span>Subtotal</span>
                                                    <span className="font-semibold text-slate-900">
                                                        {money(cartTotal)}
                                                    </span>
                                                </div>

                                                <div className="flex justify-between gap-3 text-slate-600">
                                                    <span>Delivery</span>
                                                    <span className="font-semibold text-emerald-700">
                                                        Free
                                                    </span>
                                                </div>

                                                <div className="flex justify-between gap-3 text-slate-600">
                                                    <span>Payment</span>
                                                    <span className="font-semibold text-slate-900">
                                                        Demo only
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="my-5 border-t border-slate-200" />

                                            <div className="flex items-end justify-between gap-3">
                                                <div>
                                                    <p className="text-sm font-medium text-slate-500">
                                                        Order total
                                                    </p>
                                                    <p className="mt-1 text-3xl font-black tracking-tight text-slate-900">
                                                        {money(cartTotal)}
                                                    </p>
                                                </div>

                                                <span className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                                                    Free delivery
                                                </span>
                                            </div>

                                            <Link
                                                to="/cart"
                                                className="mt-5 flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
                                            >
                                                ← Return to Cart
                                            </Link>

                                            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
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
                                                        d="M8 10V7a4 4 0 0 1 8 0v3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                Secure demo order
                                            </div>
                                        </div>
                                    </AnimatedBorder>
                                </aside>
                            </div>
                        )}
                    </>
                )}
            </div>

            <style>{`
        .checkout-border {
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
          animation: checkoutBorderFlow 7s ease infinite;
          transition: transform 250ms ease, box-shadow 250ms ease;
        }

        .checkout-border:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(15, 118, 110, 0.12);
        }

        .checkout-border-inner {
          height: 100%;
          overflow: hidden;
          border-radius: calc(1.55rem - 2px);
          background: white;
        }

        .checkout-input {
          display: block;
          width: 100%;
          border: 1px solid #dbe3e7;
          border-radius: 0.9rem;
          background: #f8fafc;
          padding: 0.9rem 1rem;
          color: #0f172a;
          outline: none;
          transition: border-color 200ms ease, box-shadow 200ms ease,
            background 200ms ease;
        }

        .checkout-input::placeholder {
          color: #94a3b8;
        }

        .checkout-input:focus {
          border-color: #10b981;
          background: white;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
        }

        @keyframes checkoutBorderFlow {
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
          .checkout-border {
            animation: none;
            transition: none;
          }

          .checkout-border:hover {
            transform: none;
          }
        }
      `}</style>
        </main>
    );
}