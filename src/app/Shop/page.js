"use client";

import React, { useState } from "react";
import FilterSection from "./components/FilterSection";
import ProductsSection from "./components/ProductsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShopPage = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);

  return (
    <>
      <Header />
      <section className="py-16 bg-gradient-to-b mt-6 from-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop</h2>
          <FilterSection setCategoryFilter={setCategoryFilter} />
          <ProductsSection categoryFilter={categoryFilter} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopPage;