import Image from "next/image"

export default function CarouselSpotify() {
    return (
        <div className="carousel carousel-vertical w-auto">
            <div className="carousel-item">
                <Image
                    src="/photo2-1.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo2-2.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo2-4.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo2-5.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
        </div>
    )
}
