'use client'
import Image from "next/image";
import Link from "next/link";

interface CardPortfolioProps {
    source: string;
    link: string;
    alt: string;
}

export default function CardPortfolio({ source, link, alt }: CardPortfolioProps) {
    return (
        <Link href={link} className="block h-full">
            <div className="h-full rounded overflow-hidden shadow-lg text-black">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
                <Image className="w-full" src={source} alt={alt} width={300} height={50} />
            </div>
        </Link>
    );
}
