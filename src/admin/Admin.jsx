import React, { useMemo, useState } from "react";
import { categories, money } from "../data";
import { useStore } from "../context/StoreContext";

const pics = {
    Living:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    Bedroom:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    Dining:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
    Office:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
};

function AnimatedBorder({ children, className = "" }) {
    return (
        <div className={`admin-border ${className}`}>
            <div className="admin-border-inner">{children}</div>
        </div>
    );
}

function StatCard({ label, value, subtitle, theme, icon }) {
    return (
        <AnimatedBorder>
            <article className={`admin-stat admin-stat-${theme}`}>
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-sm font-semibold text-slate-600">
                            {label}
                        </p>

                        <p className="mt-3 break-words text-2xl font-black text-slate-900 sm:text-3xl">
                            {value}
                        </p>

                        {subtitle && (
                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-xl shadow-sm">
                        {icon}
                    </div>
                </div>
            </article>
        </AnimatedBorder>
    );
}

function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                {eyebrow}
            </p>

            <h2 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                {title}
            </h2>

            {description && (
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                </p>
            )}
        </div>
    );
}

export default function Admin() {
    const {
        products = [],
        setProducts,
        orders = [],
        setOrders,
        enquiries = [],
        flash,
    } = useStore();

    const [logged, setLogged] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [orderFilter, setOrderFilter] = useState("All");

    const [editingProductId, setEditingProductId] = useState(null);
    const [showAllProducts, setShowAllProducts] = useState(false);

    const demoSales = useMemo(
        () =>
            orders
                .filter((order) => order.status !== "Cancelled")
                .reduce((sum, order) => {
                    const orderTotal =
                        Number(order.total) ||
                        (order.items || []).reduce(
                            (total, item) =>
                                total +
                                Number(item.price || 0) *
                                Number(item.quantity ?? item.qty ?? 1),
                            0
                        );

                    return sum + orderTotal;
                }, 0),
        [orders]
    );

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            ?.toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            categoryFilter === "All" ||
            product.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    const displayedProducts = showAllProducts
        ? filteredProducts
        : filteredProducts.slice(0, 4);

    const filteredOrders =
        orderFilter === "All"
            ? orders
            : orders.filter((order) => order.status === orderFilter);

    function handleLogin(e) {
        e.preventDefault();

        if (email === "admin@gmail.com" && pass === "admin123") {
            setLogged(true);
            flash?.("Welcome to the admin dashboard");
        } else {
            flash?.("Incorrect credentials");
        }
    }

    function resetProductForm() {
        const form = document.getElementById("admin-product-form");

        if (form) {
            form.reset();
        }

        setEditingProductId(null);
    }

    function handleProductSubmit(e) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const category = formData.get("category");

        const productData = {
            name: String(formData.get("name") || "").trim(),
            category,
            price: Number(formData.get("price")),
            image:
                String(formData.get("image") || "").trim() ||
                pics[category] ||
                pics.Living,
            desc:
                String(formData.get("desc") || "").trim() ||
                "A lovely furniture piece.",
        };

        if (
            !productData.name ||
            !productData.price ||
            productData.price <= 0
        ) {
            flash?.("Please enter a valid product name and price");
            return;
        }

        if (editingProductId !== null) {
            setProducts((currentProducts) =>
                currentProducts.map((product) =>
                    product.id === editingProductId
                        ? {
                            ...product,
                            ...productData,
                        }
                        : product
                )
            );

            flash?.("Product updated successfully");
        } else {
            const newProduct = {
                id: Date.now(),
                ...productData,
                oldPrice: 0,
                tag: "New",
            };

            setProducts((currentProducts) => [
                newProduct,
                ...currentProducts,
            ]);

            flash?.("Product added successfully");
        }

        form.reset();
        setEditingProductId(null);
    }

    function startEditingProduct(product) {
        setEditingProductId(product.id);

        const form = document.getElementById("admin-product-form");

        if (!form) return;

        form.elements.name.value = product.name || "";
        form.elements.category.value =
            product.category || categories[1] || "Living";
        form.elements.price.value = product.price ?? "";
        form.elements.image.value = product.image || "";
        form.elements.desc.value = product.desc || "";

        form.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    function cancelProductEdit() {
        resetProductForm();
        flash?.("Product editing cancelled");
    }

    function deleteProduct(productId) {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        setProducts((currentProducts) =>
            currentProducts.filter((product) => product.id !== productId)
        );

        if (editingProductId === productId) {
            resetProductForm();
        }

        flash?.("Product deleted");
    }

    function updateOrderStatus(orderId, status) {
        setOrders((currentOrders) =>
            currentOrders.map((order) =>
                order.id === orderId ? { ...order, status } : order
            )
        );

        flash?.("Order status updated");
    }

    if (!logged) {
        return (
            <main className="admin-login-page min-h-screen bg-gradient-to-br from-[#f7f5ef] via-white to-[#e4f2ed] px-4 py-12 sm:px-6">
                <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-2">
                    <section className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-800 p-8 text-white sm:p-10 lg:min-h-[620px]">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
                        <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-emerald-400/10 blur-2xl" />

                        <div className="relative">
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                                FORMA Store Management
                            </div>

                            <h1 className="mt-10 text-4xl font-black leading-tight sm:text-5xl">
                                Your store.
                                <br />
                                Your control.
                            </h1>

                            <p className="mt-5 max-w-sm leading-7 text-white/75">
                                Manage furniture, track customer orders, and review
                                enquiries from one organized dashboard.
                            </p>
                        </div>

                        <div className="relative mt-10 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                                <p className="text-2xl font-black">01</p>
                                <p className="mt-1 text-sm text-white/70">
                                    Manage products
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                                <p className="text-2xl font-black">02</p>
                                <p className="mt-1 text-sm text-white/70">
                                    Track orders
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="flex items-center p-6 sm:p-10 lg:p-12">
                        <div className="w-full">
                            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                                Staff access
                            </span>

                            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                                Admin Login
                            </h2>

                            <p className="mt-3 leading-6 text-slate-500">
                                Sign in to access your store management tools.
                            </p>

                            <form
                                className="mt-7 space-y-5"
                                onSubmit={handleLogin}
                            >
                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                                        Email address
                                    </span>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoComplete="username"
                                        placeholder="admin@forma.com"
                                        className="admin-input"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                                        Password
                                    </span>

                                    <input
                                        type="password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        required
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        className="admin-input"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    Sign In to Dashboard
                                    <span className="ml-2" aria-hidden="true">
                                        →
                                    </span>
                                </button>
                            </form>

                            <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                                 Login for this local project. It is not
                                server-side authentication.
                            </p>
                        </div>
                    </section>
                </div>

                <AdminStyles />
            </main>
        );
    }

    return (
        <main className="min-h-screen w-full bg-gradient-to-br from-[#f7f5ef] via-white to-[#eaf3ef] px-3 py-6 sm:px-4 lg:px-5">
            <div className="w-full">
                {/* Dashboard header */}
                <header className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-800">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Store Management
                        </div>

                        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                            Admin Dashboard
                        </h1>

                        <p className="mt-3 max-w-xl leading-6 text-slate-600">
                            Manage your furniture collection, monitor orders, and
                            keep track of customer enquiries.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setLogged(false)}
                        className="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-rose-400 hover:bg-rose-50 hover:text-rose-700"
                    >
                        Log Out
                        <span className="ml-2" aria-hidden="true">
                            ↗
                        </span>
                    </button>
                </header>

                {/* Dashboard stats */}
                <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard
                        label="Total Products"
                        value={products.length}
                        subtitle="Furniture items in your store"
                        theme="green"
                        icon="▦"
                    />

                    <StatCard
                        label="Total Orders"
                        value={orders.length}
                        subtitle="Customer orders received"
                        theme="orange"
                        icon="▤"
                    />

                    <StatCard
                        label="Customer Enquiries"
                        value={enquiries.length}
                        subtitle="Messages from customers"
                        theme="purple"
                        icon="✉"
                    />

                    <StatCard
                        label="Sales"
                        value={money(demoSales)}
                        subtitle="Excluding cancelled orders"
                        theme="blue"
                        icon="₹"
                    />
                </section>

                {/* Main management sections */}
                <div className="grid grid-cols-1 items-start gap-7 xl:grid-cols-2">
                    {/* Products */}
                    <section className="min-w-0">
                        <AnimatedBorder>
                            <div className="rounded-[1.4rem] bg-white p-5 sm:p-7">
                                <SectionHeading
                                    eyebrow="Inventory"
                                    title="Manage Products"
                                    description="Add new furniture products or edit your existing collection."
                                />

                                <form
                                    id="admin-product-form"
                                    className="space-y-4"
                                    onSubmit={handleProductSubmit}
                                >
                                    <label className="block">
                                        <span className="mb-2 block text-sm font-semibold text-slate-700">
                                            Product name
                                        </span>

                                        <input
                                            name="name"
                                            required
                                            placeholder="e.g. Modern Lounge Chair"
                                            className="admin-input"
                                        />
                                    </label>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <label className="block">
                                            <span className="mb-2 block text-sm font-semibold text-slate-700">
                                                Category
                                            </span>

                                            <select
                                                name="category"
                                                className="admin-input"
                                                required
                                                defaultValue={categories[1]}
                                            >
                                                {categories.slice(1).map((category) => (
                                                    <option
                                                        key={category}
                                                        value={category}
                                                    >
                                                        {category}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>

                                        <label className="block">
                                            <span className="mb-2 block text-sm font-semibold text-slate-700">
                                                Price (₹)
                                            </span>

                                            <input
                                                type="number"
                                                name="price"
                                                min="1"
                                                required
                                                placeholder="Enter price"
                                                className="admin-input"
                                            />
                                        </label>
                                    </div>

                                    <label className="block">
                                        <span className="mb-2 block text-sm font-semibold text-slate-700">
                                            Product image URL
                                        </span>

                                        <input
                                            type="url"
                                            name="image"
                                            placeholder="https://example.com/image.jpg"
                                            className="admin-input"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-sm font-semibold text-slate-700">
                                            Description
                                        </span>

                                        <textarea
                                            name="desc"
                                            rows="3"
                                            placeholder="Write a short product description"
                                            className="admin-input resize-y"
                                        />
                                    </label>

                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            type="submit"
                                            className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                                        >
                                            {editingProductId !== null
                                                ? "Save Product Changes"
                                                : "+ Add Product"}
                                        </button>

                                        {editingProductId !== null && (
                                            <button
                                                type="button"
                                                onClick={cancelProductEdit}
                                                className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-600 transition hover:bg-slate-100"
                                            >
                                                Cancel Edit
                                            </button>
                                        )}
                                    </div>

                                    {editingProductId !== null && (
                                        <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                                            You are editing an existing product.
                                            Save your changes or cancel editing.
                                        </p>
                                    )}
                                </form>

                                <div className="my-7 border-t border-slate-200" />

                                {/* Product search and category filter */}
                                <div className="mb-4 flex flex-col gap-3 sm:flex-row">
                                    <input
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                            setShowAllProducts(false);
                                        }}
                                        placeholder="Search products..."
                                        className="admin-input min-w-0 flex-1"
                                    />

                                    <select
                                        value={categoryFilter}
                                        onChange={(e) => {
                                            setCategoryFilter(e.target.value);
                                            setShowAllProducts(false);
                                        }}
                                        className="admin-input sm:max-w-44"
                                    >
                                        <option value="All">All Categories</option>

                                        {categories.slice(1).map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Product list heading */}
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="font-bold text-slate-900">
                                        Product List
                                    </h3>

                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                                        {filteredProducts.length} products
                                    </span>
                                </div>

                                {/* Product cards */}
                                <div className="space-y-3">
                                    {displayedProducts.length ? (
                                        displayedProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                className="flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-emerald-200 hover:bg-emerald-50/40 sm:flex-row sm:items-center sm:gap-4"
                                            >
                                                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white">
                                                    <img
                                                        src={
                                                            product.image ||
                                                            pics[product.category] ||
                                                            pics.Living
                                                        }
                                                        alt={product.name}
                                                        className="h-full w-full object-contain p-1"
                                                    />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-sm font-bold text-slate-900">
                                                        {product.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-slate-500">
                                                        {product.category || "Furniture"}
                                                    </p>

                                                    <p className="mt-1 font-bold text-emerald-700">
                                                        {money(product.price)}
                                                    </p>
                                                </div>

                                                <div className="flex shrink-0 gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            startEditingProduct(product)
                                                        }
                                                        className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deleteProduct(product.id)
                                                        }
                                                        className="rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-600 hover:text-white"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="rounded-2xl bg-slate-50 p-5 text-center text-sm text-slate-500">
                                            No products found.
                                        </p>
                                    )}
                                </div>

                                {/* View More / Show Less */}
                                {filteredProducts.length > 4 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowAllProducts((previous) => !previous)
                                        }
                                        className="mt-5 w-full rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 font-bold text-emerald-700 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                                    >
                                        {showAllProducts
                                            ? "Show Less"
                                            : `View More (${filteredProducts.length - 4} more)`}
                                    </button>
                                )}
                            </div>
                        </AnimatedBorder>
                    </section>

                    {/* Orders and enquiries */}
                    <section className="min-w-0 space-y-7">
                        <AnimatedBorder>
                            <div className="rounded-[1.4rem] bg-white p-5 sm:p-7">
                                <SectionHeading
                                    eyebrow="Sales"
                                    title="Customer Orders"
                                    description="Review orders and update their current status."
                                />

                                <div className="mb-4">
                                    <select
                                        value={orderFilter}
                                        onChange={(e) =>
                                            setOrderFilter(e.target.value)
                                        }
                                        className="admin-input"
                                    >
                                        <option value="All">All Orders</option>
                                        <option value="Received">Received</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    {filteredOrders.length ? (
                                        filteredOrders.map((order) => (
                                            <article
                                                key={order.id}
                                                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                                            >
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                    <div className="min-w-0">
                                                        <p className="break-all text-sm font-black text-slate-900">
                                                            {order.id}
                                                        </p>

                                                        <p className="mt-1 font-semibold text-slate-700">
                                                            {order.name}
                                                        </p>

                                                        <p className="mt-1 break-all text-xs text-slate-500">
                                                            {order.email}
                                                        </p>

                                                        {order.phone && (
                                                            <p className="mt-1 text-xs text-slate-500">
                                                                {order.phone}
                                                            </p>
                                                        )}

                                                        {order.date && (
                                                            <p className="mt-1 text-xs text-slate-400">
                                                                {order.date}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="sm:text-right">
                                                        <p className="text-lg font-black text-emerald-700">
                                                            {money(Number(order.total || 0))}
                                                        </p>

                                                        <span className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">
                                                            {order.items?.length || 0} items
                                                        </span>
                                                    </div>
                                                </div>

                                                {order.address && (
                                                    <p className="mt-3 rounded-xl bg-white p-3 text-xs leading-5 text-slate-600">
                                                        <b className="text-slate-800">
                                                            Delivery:
                                                        </b>{" "}
                                                        {order.address}
                                                    </p>
                                                )}

                                                <div className="mt-4">
                                                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                                                        Order status
                                                    </label>

                                                    <select
                                                        value={order.status || "Received"}
                                                        onChange={(e) =>
                                                            updateOrderStatus(
                                                                order.id,
                                                                e.target.value
                                                            )
                                                        }
                                                        className="admin-input"
                                                    >
                                                        <option>Received</option>
                                                        <option>Processing</option>
                                                        <option>Completed</option>
                                                        <option>Cancelled</option>
                                                    </select>
                                                </div>
                                            </article>
                                        ))
                                    ) : (
                                        <p className="rounded-2xl bg-slate-50 p-5 text-center text-sm text-slate-500">
                                            No orders found.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </AnimatedBorder>

                        {/* Enquiries */}
                        <AnimatedBorder>
                            <div className="rounded-[1.4rem] bg-white p-5 sm:p-7">
                                <SectionHeading
                                    eyebrow="Customer messages"
                                    title="Enquiries"
                                    description="Messages submitted through your contact page."
                                />

                                <div className="space-y-3">
                                    {enquiries.length ? (
                                        enquiries.map((enquiry) => (
                                            <article
                                                key={enquiry.id}
                                                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <p className="break-words font-bold text-slate-900">
                                                            {enquiry.name}
                                                        </p>

                                                        <p className="mt-1 break-all text-xs text-slate-500">
                                                            {enquiry.email}
                                                        </p>
                                                    </div>

                                                    <span className="shrink-0 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                                                        Enquiry
                                                    </span>
                                                </div>

                                                <p className="mt-3 whitespace-pre-wrap break-words rounded-xl bg-white p-3 text-sm leading-6 text-slate-600">
                                                    {enquiry.message}
                                                </p>
                                            </article>
                                        ))
                                    ) : (
                                        <p className="rounded-2xl bg-slate-50 p-5 text-center text-sm text-slate-500">
                                            No enquiries yet.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </AnimatedBorder>
                    </section>
                </div>
            </div>

            <AdminStyles />
        </main>
    );
}

function AdminStyles() {
    return (
        <style>{`
            .admin-border {
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
                animation: adminBorderFlow 8s ease infinite;
                transition: transform 250ms ease, box-shadow 250ms ease;
            }

            .admin-border:hover {
                transform: translateY(-2px);
                box-shadow: 0 16px 40px rgba(15, 118, 110, 0.12);
            }

            .admin-border-inner {
                height: 100%;
                overflow: hidden;
                border-radius: calc(1.55rem - 2px);
                background: white;
            }

            .admin-stat {
                height: 100%;
                padding: 1.25rem;
                border-radius: calc(1.55rem - 2px);
            }

            .admin-stat-green {
                background: linear-gradient(135deg, #ecfdf5, #d1fae5);
            }

            .admin-stat-orange {
                background: linear-gradient(135deg, #fff7ed, #ffedd5);
            }

            .admin-stat-purple {
                background: linear-gradient(135deg, #f5f3ff, #ede9fe);
            }

            .admin-stat-blue {
                background: linear-gradient(135deg, #eff6ff, #dbeafe);
            }

            .admin-input {
                display: block;
                width: 100%;
                min-width: 0;
                border: 1px solid #dbe3e7;
                border-radius: 0.9rem;
                background: #f8fafc;
                padding: 0.85rem 1rem;
                color: #0f172a;
                outline: none;
                transition: border-color 200ms ease, box-shadow 200ms ease,
                    background 200ms ease;
            }

            .admin-input::placeholder {
                color: #94a3b8;
            }

            .admin-input:focus {
                border-color: #10b981;
                background: white;
                box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
            }

            @keyframes adminBorderFlow {
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
                .admin-border {
                    animation: none;
                    transition: none;
                }

                .admin-border:hover {
                    transform: none;
                }
            }
        `}</style>
    );
}