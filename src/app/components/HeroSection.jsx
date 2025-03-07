import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TomatoImg from "../../../public/Tomato2.png";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Define circular orbit for vegetables
const vegetableVariants = (index, radius = 200) => ({
  animate: {
    rotate: [0, 360], // Full 360-degree rotation
    transition: {
      duration: 6 + index, // Different speeds for each vegetable
      repeat: Infinity,
      ease: "linear",
    },
  },
  // Initial offset to position vegetables around the circle
  initial: {
    x: radius * Math.cos((index * 2 * Math.PI) / 3),
    y: radius * Math.sin((index * 2 * Math.PI) / 3),
  },
});

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Get the Fresh Food from our Agro Market
            </h1>
            <p className="text-lg text-muted-foreground">
              Direct from local farmers to your table. Fresh, organic, and sustainably grown produce.
            </p>
            <motion.div
              className="flex space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative h-[600px]">
            {/* Central Tomato Image */}
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="absolute top-[70px] left-[170px] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[90%]"
            >
              <Image
                src={TomatoImg}
                alt="Fresh Produce"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </motion.div>

            {/* Orbiting Vegetables */}
            {/* {[
              "/placeholder.svg?height=80&width=80&text=Carrot", // Carrot
              "/placeholder.svg?height=80&width=80&text=Broccoli", // Broccoli
              "/placeholder.svg?height=80&width=80&text=Lettuce", // Lettuce
            ].map((src, index) => (
              <motion.div
                key={index}
                className="absolute top-[50%] left-[55%] -translate-x-1/2 -translate-y-1/2"
                variants={vegetableVariants(index, 200)} // Radius set to 200px
                initial="initial"
                animate="animate"
                style={{ transformOrigin: "center" }} // Ensure rotation happens around the tomato
              >
                <Image
                  src={src}
                  alt={`Vegetable ${index + 1}`}
                  width={80}
                  height={80}
                  className="rounded-full shadow-lg"
                />
              </motion.div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;