"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomImagePath } from "@/lib/utils/getRandomImageNames";
import Image from "next/image";

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(getRandomImagePath());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(getRandomImagePath());
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full lg:w-1/2">
      <AnimatePresence>
        <motion.div
          className="absolute max-h-full w-full"
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={currentImage}
            alt="Random"
            className="object-center object-cover rounded-md"
            width={400}
            height={320}
            style={{ width: "100%", height: "320px" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
