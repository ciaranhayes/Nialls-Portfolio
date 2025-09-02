import Image from "next/image"

export default function CarouselMPower() {
    return (
        <div className="carousel carousel-vertical rounded-box w-auto">
            <div className="carousel-item">
                <Image
                    src="portfolio-stuff.png"
                    className="w-auto h-auto max-h-[500px] object-contain"
                    alt="carousel item"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="photo-1.jpg"
                    className="w-auto h-auto max-h-[500px] object-contain"
                    alt="carousel item"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="photo-2.png"
                    className="w-auto h-auto max-h-[500px] object-contain"
                    alt="carousel item"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="photo-3.png"
                    className="w-auto h-auto max-h-[500px] object-contain"
                    alt="carousel item"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="photo-4.jpg"
                    className="w-auto h-auto max-h-[500px] object-contain"
                    alt="carousel item"
                />
            </div>
        </div>
    )
}


