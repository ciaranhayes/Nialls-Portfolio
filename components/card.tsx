'use client'
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import Link from "next/link";

interface CardPortfolioProps {
    source: string;
    link: string;
    alt: string;
    text: string;
    title: string;
    tag1: string[];
    id: string;
}

export default function CardPortfolio({ source, link, alt, text, title, tag1, id }: CardPortfolioProps) {
    return (
        <Link id={id} href={link} className="block h-full">
            <div className="h-full rounded overflow-hidden shadow-lg text-white">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-base">
                        {text}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tag1.map(tag => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-gray-500" key={uuidv4()}>{tag}</span>)}
                </div>
                <Image className="w-full" src={source} alt={alt} width={300} height={50} />
            </div>
        </Link>
    );
}
