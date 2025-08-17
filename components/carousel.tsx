'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type ImageSliderProps = {
    imageUrls: string[];
};

export default function Carousel({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    function increase() {
        setImageIndex((prev) => (prev + 1) % imageUrls.length);
    }

    function decrease() {
        setImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
    }

    return (
        <div className="relative flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 mt-7">
            <div className="relative w-full max-w-2xl flex justify-center">
                <button
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 hover:bg-[#38d586B2] text-white p-2 sm:p-3 rounded-full shadow-md"
                    onClick={decrease}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                        />
                    </svg>
                </button>
                <div className="w-full flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={imageUrls[imageIndex]} // key triggers animation on change
                            src={imageUrls[imageIndex]}
                            alt="photos from project"
                            className="w-full max-w-full max-h-[300px] sm:max-h-[500px] rounded-xl shadow-lg object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>
                </div>
                <button
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:bg-[#38d586B2] text-white p-2 sm:p-3 rounded-full shadow-md"
                    onClick={increase}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
