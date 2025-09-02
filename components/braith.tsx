import Image from "next/image"

export default function CarouselBraith() {
    return (
        <div className="carousel carousel-vertical w-auto">
            <div className="carousel-item">
                <Image
                    src="/photo3-1.jpg"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={600} // enforce fixed width for Next.js Image
                    height={500} // max height for scaling
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo3-2.jpg"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={600}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo3-3.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={600}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo3-4.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={600}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo3-5.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={600}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo3-6.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={600}
                    height={500}
                />
            </div>
        </div>
    )
}
