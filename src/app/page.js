"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductsSection from "./components/ProductsSection";
import CategoriesSection from "./components/CategoriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const featuredRef = useRef(null);
  const productsRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    gsap.from(featuredRef.current?.children || [], {
      scrollTrigger: { trigger: featuredRef.current, start: "top center", end: "bottom center" },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    gsap.from(productsRef.current?.children || [], {
      scrollTrigger: { trigger: productsRef.current, start: "top center", end: "bottom center" },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    });

    gsap.from(testimonialsRef.current?.children || [], {
      scrollTrigger: { trigger: testimonialsRef.current, start: "top center", end: "bottom center" },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <HeroSection />
        <FeaturesSection featuredRef={featuredRef} />
        <ProductsSection productsRef={productsRef} />
        <CategoriesSection />
        <TestimonialsSection testimonialsRef={testimonialsRef} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}