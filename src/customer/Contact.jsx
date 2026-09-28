import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const showroomAddress = "Coimbatore, Tamil Nadu, India";
const showroomPhone = "+91 90000 00000";
const showroomEmail = "info@formafurniture.com";

const faqs = [
    {
        question: "Can I see the furniture before ordering?",
        answer:
            "Yes. You can visit our showroom in Coimbatore to explore selected furniture pieces and discuss your requirements with our team.",
    },
    {
        question: "Do you provide delivery?",
        answer:
            "Delivery availability and charges depend on your location and the product. Contact our team with your delivery address for details.",
    },
    {
        question: "Can I ask for help choosing furniture?",
        answer:
            "Absolutely. Tell us about your room, style, and requirements. Our team can help you explore suitable furniture options.",
    },
    {
        question: "How can I ask about an order?",
        answer:
            "Send us an enquiry using the form on this page, or contact us by phone or email. Please include your order details if you have them.",
    },
];

function Contact() {
    const { setEnquiries, flash } = useStore();
    const [openFaq, setOpenFaq] = useState(0);

    function send(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const enquiry = {
            id: Date.now(),
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            date: new Date().toLocaleDateString(),
            status: "New",
        };

        setEnquiries((items) => [enquiry, ...items]);

        form.reset();
        flash("Enquiry sent. Thank you!");
    }

    return (
        <main className="bg-[#f7f3ed] text-[#253237]">
            {/* Hero section */}
            <section className="relative overflow-hidden bg-[#253237]">
                <div className="grid min-h-[480px] lg:grid-cols-2">
                    <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
                        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d6ad78]">
                            Come say hello
                        </span>

                        <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] text-[#f7f3ed] sm:text-6xl lg:text-7xl">
                            Let’s talk about
                            <br />
                            <span className="font-serif italic text-[#d6ad78]">
                                your space.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-8 text-white/70 sm:text-lg">
                            Questions about a piece, delivery, or styling? We’re here to help
                            you create a home that feels like you.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#contact-form"
                                className="inline-flex items-center justify-center rounded-full bg-[#c47755] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#ad6243]"
                            >
                                Send an enquiry <span className="ml-2">↗</span>
                            </a>

                            <a
                                href={`tel:${showroomPhone.replace(/\s/g, "")}`}
                                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Call our team
                            </a>
                        </div>
                    </div>

                    <div className="relative min-h-[300px] lg:min-h-full">
                        <img
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                            alt="Warm modern living room with comfortable furniture"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#253237]/50 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/15 p-5 text-white shadow-xl backdrop-blur-md sm:bottom-10 sm:left-10 sm:right-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                                FORMA Furniture
                            </p>
                            <p className="mt-2 text-xl font-medium sm:text-2xl">
                                Thoughtful pieces. Spaces with soul.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact information */}
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mb-10 max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b47a56]">
                        We’re here for you
                    </span>

                    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                        A few ways to reach us
                    </h2>

                    <p className="mt-4 leading-7 text-[#5c6b73]">
                        Whether you’re planning a room refresh or need help with an order,
                        choose the contact option that works for you.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Visit */}
                    <article className="rounded-3xl border border-[#e7ded2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-5 h-40 overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85"
                                alt="Elegant interior with carefully arranged furniture"
                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b47a56]">
                            Visit us
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">Our showroom</h3>

                        <p className="mt-3 leading-7 text-[#5c6b73]">
                            FORMA Furniture
                            <br />
                            Coimbatore, Tamil Nadu, India
                        </p>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Furniture+showroom+Coimbatore+Tamil+Nadu"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center font-semibold text-[#a65f43] hover:text-[#253237]"
                        >
                            View on map <span className="ml-2">↗</span>
                        </a>
                    </article>

                    {/* Phone */}
                    <article className="rounded-3xl border border-[#e7ded2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-5 h-40 overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=85"
                                alt="Customer service conversation at a desk"
                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b47a56]">
                            Give us a call
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">Talk to our team</h3>

                        <p className="mt-3 leading-7 text-[#5c6b73]">
                            Have a quick question about furniture, delivery, or an order?
                            We’d be happy to help.
                        </p>

                        <a
                            href={`tel:${showroomPhone.replace(/\s/g, "")}`}
                            className="mt-5 inline-flex font-semibold text-[#a65f43] hover:text-[#253237]"
                        >
                            {showroomPhone}
                        </a>
                    </article>

                    {/* Email */}
                    <article className="rounded-3xl border border-[#e7ded2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                        <div className="mb-5 h-40 overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85"
                                alt="Warm and welcoming modern workspace"
                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b47a56]">
                            Write to us
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">Email support</h3>

                        <p className="mt-3 leading-7 text-[#5c6b73]">
                            Send us your questions or product requirements. We’ll get back
                            to you as soon as possible.
                        </p>

                        <a
                            href={`mailto:${showroomEmail}`}
                            className="mt-5 inline-flex break-all font-semibold text-[#a65f43] hover:text-[#253237]"
                        >
                            {showroomEmail}
                        </a>
                    </article>
                </div>
            </section>

            {/* Contact form and showroom hours */}
            <section
                id="contact-form"
                className="border-y border-[#e7ded2] bg-[#eee7dc]"
            >
                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-20">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b47a56]">
                            Get in touch
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                            Tell us what
                            <br />
                            you have in mind.
                        </h2>

                        <p className="mt-5 max-w-lg leading-7 text-[#5c6b73]">
                            Share a little about what you’re looking for. Our team will use
                            your message to understand how we can help.
                        </p>

                        <div className="mt-9 space-y-6">
                            <div className="border-b border-[#d8cabb] pb-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a65f43]">
                                    Showroom
                                </p>
                                <p className="mt-2 font-medium">FORMA Furniture</p>
                                <p className="mt-1 text-[#5c6b73]">{showroomAddress}</p>
                            </div>

                            <div className="border-b border-[#d8cabb] pb-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a65f43]">
                                    Opening hours
                                </p>
                                <p className="mt-2 font-medium">Monday – Saturday</p>
                                <p className="mt-1 text-[#5c6b73]">10:00 AM – 8:00 PM</p>
                                <p className="mt-1 text-sm text-[#7b8588]">
                                    Sunday: Please contact us before visiting.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a65f43]">
                                    Contact
                                </p>
                                <a
                                    href={`tel:${showroomPhone.replace(/\s/g, "")}`}
                                    className="mt-2 block font-medium hover:text-[#a65f43]"
                                >
                                    {showroomPhone}
                                </a>
                                <a
                                    href={`mailto:${showroomEmail}`}
                                    className="mt-1 block text-[#5c6b73] hover:text-[#a65f43]"
                                >
                                    {showroomEmail}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry form */}
                    <form
                        onSubmit={send}
                        className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                    >
                        <div className="mb-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b47a56]">
                                Send an enquiry
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold">
                                How can we help?
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#7b8588]">
                                Fields marked with * are required.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="block text-sm font-medium">
                                Your name *
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    placeholder="Enter your name"
                                    className="mt-2 w-full rounded-xl border border-[#e2d9ce] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b47a56] focus:ring-2 focus:ring-[#b47a56]/15"
                                />
                            </label>

                            <label className="block text-sm font-medium">
                                Email address *
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    className="mt-2 w-full rounded-xl border border-[#e2d9ce] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b47a56] focus:ring-2 focus:ring-[#b47a56]/15"
                                />
                            </label>

                            <label className="block text-sm font-medium">
                                Phone number
                                <input
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="+91"
                                    className="mt-2 w-full rounded-xl border border-[#e2d9ce] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b47a56] focus:ring-2 focus:ring-[#b47a56]/15"
                                />
                            </label>

                            <label className="block text-sm font-medium">
                                Enquiry type
                                <select
                                    name="subject"
                                    defaultValue=""
                                    className="mt-2 w-full rounded-xl border border-[#e2d9ce] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b47a56] focus:ring-2 focus:ring-[#b47a56]/15"
                                >
                                    <option value="">Choose a topic</option>
                                    <option value="Product enquiry">Product enquiry</option>
                                    <option value="Order support">Order support</option>
                                    <option value="Delivery question">Delivery question</option>
                                    <option value="Styling advice">Styling advice</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>

                            <label className="block text-sm font-medium sm:col-span-2">
                                How can we help? *
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Tell us a little about what you need..."
                                    className="mt-2 w-full resize-y rounded-xl border border-[#e2d9ce] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b47a56] focus:ring-2 focus:ring-[#b47a56]/15"
                                />
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#253237] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5c6b73] sm:w-auto"
                        >
                            Send enquiry <span className="ml-2">↗</span>
                        </button>

                        <p className="mt-4 text-xs leading-5 text-[#7b8588]">
                            Your enquiry is saved in this demo website’s local storage.
                        </p>
                    </form>
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b47a56]">
                        Good to know
                    </span>
                    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 leading-7 text-[#5c6b73]">
                        A few helpful answers before you get in touch.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-2xl border border-[#e7ded2] bg-white"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                                >
                                    <span className="font-semibold">{faq.question}</span>
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1e8dc] text-lg text-[#a65f43]">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 sm:px-6">
                                        <p className="max-w-3xl leading-7 text-[#5c6b73]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-3xl bg-[#253237] px-6 py-8 text-center text-white sm:px-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6ad78]">
                        Still have a question?
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">
                        We’d love to hear from you.
                    </h3>
                    <p className="mx-auto mt-3 max-w-xl leading-7 text-white/70">
                        Send us a message and let’s find the right furniture for your space.
                    </p>
                    <Link
                        to="/collection"
                        className="mt-6 inline-flex rounded-full bg-[#c47755] px-7 py-3.5 font-semibold text-white transition hover:bg-[#ad6243]"
                    >
                        Explore collection <span className="ml-2">↗</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Contact;