import { useCallback, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./customer/Home";
import Collection from "./customer/Collection";
import Product from "./customer/Product";
import Cart from "./customer/Cart";
import Wishlist from "./customer/Wishlist";
import Checkout from "./customer/Checkout";
import About from "./customer/About";
import Contact from "./customer/Contact";
import Rooms from "./customer/Rooms";

import Admin from "./admin/Admin";

function App() {
  const loc = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Show loading screen when the app first opens.
  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  // Remove trailing slashes from the URL.
  const pathname = loc.pathname.replace(/\/+$/, "") || "/";
  const isAdminPage = pathname === "/admin";

  let page;

  if (pathname === "/") {
    page = <Home />;
  } else if (pathname === "/collection" || pathname === "/shop") {
    page = <Collection />;
  } else if (
    pathname === "/product" ||
    pathname.startsWith("/product/")
  ) {
    page = <Product />;
  } else if (pathname === "/cart") {
    page = <Cart />;
  } else if (pathname === "/wishlist") {
    page = <Wishlist />;
  } else if (pathname === "/checkout") {
    page = <Checkout />;
  } else if (pathname === "/about") {
    page = <About />;
  } else if (pathname === "/contact") {
    page = <Contact />;
  } else if (pathname === "/rooms") {
    page = <Rooms />;
  } else if (pathname === "/admin") {
    page = <Admin />;
  } else {
    page = (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-3 text-4xl font-bold text-gray-900">
          404
        </h1>

        <p className="mb-6 text-gray-600">
          Sorry, the page you are looking for could not be found.
        </p>

        <Link
          to="/"
          className="rounded-full bg-[#253237] px-6 py-3 font-semibold text-white transition hover:bg-[#5C6B73]"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <>
      {/* Scroll to top when the route changes and show the scroll button */}
      <ScrollToTop />

      {!isAdminPage && <Navbar />}

      <div className={isAdminPage ? "min-h-screen" : "min-h-[60vh]"}>
        {page}
      </div>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;