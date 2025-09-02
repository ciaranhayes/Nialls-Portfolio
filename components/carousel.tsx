import Image from "next/image"

export default function CarouselMPower() {
    return (
        <div className="carousel carousel-vertical w-auto">
            <div className="carousel-item">
                <Image
                    src="/portfolio-stuff.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo-1.jpg"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo-2.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo-3.png"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/photo-4.jpg"
                    className="w-[400px] h-auto object-contain"
                    alt="carousel item"
                    width={400}
                    height={500}
                />
            </div>
        </div>
    )
}
