'use client'
import Image from "next/image";
import { useState } from "react";

type ImageSliderProps = {
    imageUrls: string[]
}

export default function Carousel({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);
    return(
        <img src={imageUrls{imageIndex}} alt="" />
    );
}
