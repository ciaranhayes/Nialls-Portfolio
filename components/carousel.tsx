'use client'
import { useState } from "react";

type ImageSliderProps = {
    imageUrls: string[]
}

export default function Carousel({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    function increase() {
        setImageIndex(imageIndex + 1)
        if(imageIndex >= (imageUrls.length - 1)) {
            setImageIndex(0);
        }
    }

    function decrease() {
        setImageIndex(imageIndex - 1)
        if(imageIndex <= (imageUrls.length + 1)) {
            setImageIndex(imageUrls.length);
        }
    }
    
    return(
        <div className="container mx-auto px-4 text-white grid">
        <img src={imageUrls[imageIndex]} alt="photos from project" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrease}>Left</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-end" onClick={increase}>Right</button>
        </div>
        
    );
}
