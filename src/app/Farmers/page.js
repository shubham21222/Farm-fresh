// pages/Farmer.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';

// Sample Farmers Data
const farmers = [
  {
    name: "John Doe",
    location: "Sunnyvale Farms, CA",
    image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialty: "Organic Vegetables",
    experience: "15+ years",
    description: "Passionate about sustainable farming and organic produce."
  },
  {
    name: "Maria Silva",
    location: "Green Hills, OR",
    image: "https://images.pexels.com/photos/5946108/pexels-photo-5946108.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialty: "Fruit Orchards",
    experience: "20+ years",
    description: "Third-generation farmer specializing in heritage fruit varieties."
  },
  {
    name: "Robert Chen",
    location: "Valley View Farm, WA",
    image: "https://images.pexels.com/photos/8911786/pexels-photo-8911786.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialty: "Hydroponic Farming",
    experience: "10+ years",
    description: "Pioneer in modern sustainable farming techniques."
  }
];

// Farmers Page Component
const FarmerPage = () => {
  return (
    <>
    <Header />
    <section className="min-h-screen mt-14 bg-gradient-to-b from-green-50 via-white to-green-50 py-16">
      <div className="container mx-auto px-4">
       
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-4 tracking-tight">
            Meet Our Farmers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the dedicated individuals who wake up at dawn to bring you nature&apos;s finest harvests. 
            Each farmer has a unique story and a commitment to sustainable agriculture.
          </p>
        </motion.div>

        {/* Farmers List */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {farmers.map((farmer, index) => (
            <motion.div
              key={farmer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              {/* Farmer Image with Gradient Overlay */}
              <div className="relative h-96">
                <Image
                  src={farmer.image}
                  alt={farmer.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                
                {/* Farmer Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-3xl font-bold text-white mb-2">{farmer.name}</h2>
                  <div className="flex items-center text-green-300 mb-3">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{farmer.location}</span>
                  </div>
                  
                  <div className="space-y-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-lg font-semibold">Specialty: {farmer.specialty}</p>
                    <p className="text-sm">{farmer.experience} of Experience</p>
                    <p className="text-sm italic">{farmer.description}</p>
                    <Button
                      variant="outline"
                      className="mt-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 transition-all"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6 rounded-full shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <Link href="/Shop">Explore Our Farm Fresh Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default FarmerPage;