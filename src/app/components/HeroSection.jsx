import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TomatoImg from "../../../public/Tomato2.png";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Pagination } from "swiper/modules"; // Import Swiper modules
import EggsImg from "../../../public/eggs2.png";
import VegetablesImg from "../../../public/Vegetables2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Floating animation for bounce effect
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

const HeroSection = () => {
  // Array of images for the carousel
  const carouselImages = [
    TomatoImg, // Local image
    EggsImg,
    VegetablesImg
    ];

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-[60px] md:py-[70px]">
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
              Direct from local farmers to your table. Fresh, organic, and
              sustainably grown produce.
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

          <div className="relative h-[600px] mt-8 w-full">
            {/* Swiper Carousel */}
            <Swiper
              style={{ height: "80%", width: "60%" }} // Ensure Swiper takes full space
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {carouselImages.map((src, index) => (
                <SwiperSlide key={index}>
                  {/* Wrap the image with motion.div for bounce effect */}
                  <motion.div
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    className="relative h-full w-full"
                  >
                    <Image
                      src={src}
                      alt={`Fresh Produce ${index + 1}`}
                      fill
                      className="object-contain rounded-2xl"
                      priority
                      quality={90} // Increase image quality
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
