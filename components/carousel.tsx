'use client'
import { useState } from "react";

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
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:w-[72rem]"
                />
            </div>
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
                <img
                    src={imageUrls[imageIndex]}
                    alt="photos from project"
                    className="w-full max-w-full max-h-[300px] sm:max-h-[500px] rounded-xl shadow-lg object-contain"
                />
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
