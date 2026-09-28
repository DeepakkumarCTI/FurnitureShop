export const initialProducts = [
    {
        id: 1,
        name: "Sculpted Oak Lounge Chair",
        category: "Living",
        price: 18999,
        oldPrice: 22999,
        tag: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85",
        desc: "A sculptural solid-oak frame paired with a softly textured, supportive seat.",
    },
    {
        id: 2,
        name: "Nora Modular Sofa",
        category: "Living",
        price: 64999,
        oldPrice: 72999,
        tag: "New",
        image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
        desc: "Generous, relaxed seating with clean lines and a timeless profile.",
    },
    {
        id: 3,
        name: "Arc Bedside Table",
        category: "Bedroom",
        price: 12999,
        oldPrice: 15999,
        tag: "Popular",
        image:
            "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1000&q=85",
        desc: "A compact bedside companion with a warm wood finish and thoughtful storage.",
    },
    {
        id: 4,
        name: "Mira Dining Table",
        category: "Dining",
        price: 42999,
        oldPrice: 48999,
        tag: "",
        image:
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
        desc: "A welcoming dining table made for everyday meals and long conversations.",
    },
    {
        id: 5,
        name: "Linen Accent Armchair",
        category: "Living",
        price: 24999,
        oldPrice: 0,
        tag: "",
        image:
            "https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=1000&q=85",
        desc: "Soft linen upholstery and a compact silhouette for calm corners.",
    },
    {
        id: 6,
        name: "Minimal Writing Desk",
        category: "Office",
        price: 21999,
        oldPrice: 25999,
        tag: "",
        image:
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85",
        desc: "A streamlined work surface that keeps your home office feeling open.",
    },
    {
        id: 7,
        name: "Cloud Side Table",
        category: "Living",
        price: 9999,
        oldPrice: 0,
        tag: "",
        image:
            "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1000&q=85",
        desc: "An understated accent table with a natural finish.",
    },
    {
        id: 8,
        name: "Ridge Upholstered Bed",
        category: "Bedroom",
        price: 55999,
        oldPrice: 62999,
        tag: "",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
        desc: "A beautifully upholstered bed designed for restful evenings.",
    },
];

// Keep both names available for compatibility.
export const products = initialProducts;

export const categories = [
    "All",
    "Living",
    "Bedroom",
    "Dining",
    "Office",
];

// Format prices in Indian Rupees.
export const money = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(Number(amount) || 0);