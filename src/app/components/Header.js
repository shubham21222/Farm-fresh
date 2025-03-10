"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Search, Leaf, X, Menu, User } from "lucide-react"; // Added User icon
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import AuthModal from './auth/AuthModal';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop Organic", path: "/Shop" },
    { name: "Farmers", path: "/Farmers" },
    { name: "About Us", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    };

    const updateWishlistCount = () => {
      const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
      setWishlistCount(wishlistItems.length);
    };

    updateCartCount();
    updateWishlistCount();
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("wishlistUpdated", updateWishlistCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("wishlistUpdated", updateWishlistCount);
    };
  }, []);

  const handleCategoryClick = (category) => {
    router.push(`/shop?category=${category}`);
  };

  const buttonClasses = {
    primary: "w-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white py-4 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_8px_25px_-8px_rgba(22,163,74,0.5)] active:scale-[0.98] focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none",
    social: "flex items-center justify-center px-4 py-3.5 border-2 border-green-100 rounded-lg bg-green-50/50 hover:bg-green-100/50 hover:border-green-200 hover:shadow-[0_0_15px_-3px_rgba(22,163,74,0.2)] transition-all duration-300 group",
    back: "flex items-center justify-center text-sm text-green-600 hover:text-green-700 transition-colors duration-200 py-2.5 hover:bg-green-50 rounded-lg group font-medium"
  };


  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-green-100 z-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between h-[56px] md:h-[74px]">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold">Agro Market</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 menu-main">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className="text-sm uppercase font-medium hover:text-green-600 transition-colors link"
                  >
                    {item.name}
                  </Link>
                  {item.name === "Shop Organic" && (
                    <div className="sub-menu absolute top-full left-0 bg-white shadow-lg rounded-b-xl py-4 px-6 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-300 transform scale-y-0 origin-top">
                      <div className="space-y-2">
                        <button
                          onClick={() => handleCategoryClick("fruits")}
                          className="text-left text-black hover:text-green-600 transition-colors link w-full text-left"
                        >
                          Organic Fruits
                        </button>
                        <button
                          onClick={() => handleCategoryClick("vegetables")}
                          className="text-left text-black hover:text-green-600 transition-colors link w-full text-left"
                        >
                          Organic Vegetables
                        </button>
                        <button
                          onClick={() => handleCategoryClick("dairy")}
                          className="text-left text-black hover:text-green-600 transition-colors link w-full text-left"
                        >
                          Organic Dairy
                        </button>
                        <button
                          onClick={() => handleCategoryClick("grains")}
                          className="text-left text-black hover:text-green-600 transition-colors link w-full text-left"
                        >
                          Organic Grains
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => router.push("/search")}>
                <Search className="w-5 h-5" />
              </Button>
              <Link href="/Wishlist">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/Cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/my-account">
                <Button variant="ghost" size="icon" className="relative">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
              <Button
                className="hidden md:inline-flex bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_8px_25px_-8px_rgba(22,163,74,0.5)] active:scale-[0.98] focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold">Agro Market</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
              <input
                type="text"
                placeholder="Search organic products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <Link href={item.path} className="link">
                      {item.name}
                    </Link>
                    {item.name === "Shop Organic" && (
                      <button onClick={() => setIsMenuOpen(true)}>
                        <span className="text-right">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </button>
                    )}
                  </div>
                  {item.name === "Shop Organic" && (
                    <div className="ml-4 mt-2 space-y-2">
                      <button
                        onClick={() => handleCategoryClick("fruits")}
                        className="block text-black hover:text-green-600 link"
                      >
                        Organic Fruits
                      </button>
                      <button
                        onClick={() => handleCategoryClick("vegetables")}
                        className="block text-black hover:text-green-600 link"
                      >
                        Organic Vegetables
                      </button>
                      <button
                        onClick={() => handleCategoryClick("dairy")}
                        className="block text-black hover:text-green-600 link"
                      >
                        Organic Dairy
                      </button>
                      <button
                        onClick={() => handleCategoryClick("grains")}
                        className="block text-black hover:text-green-600 link"
                      >
                        Organic Grains
                      </button>
                    </div>
                  )}
                </div>
              ))}
              {/* Added My Account to Mobile Menu */}
              <div>
                <Link href="/my-account" className="link text-lg font-semibold">
                  My Account
                </Link>
              </div>
            </nav>
            <div className="mt-6">
              <Button
                className="w-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_8px_25px_-8px_rgba(22,163,74,0.5)] active:scale-[0.98] focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;