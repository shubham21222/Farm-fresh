"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Heart, Search, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "Farmers", path: "/Farmer" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

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

  return (
    <header className="fixed top-0 w-full bg-green-100 z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold">Agro Market</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
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
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;