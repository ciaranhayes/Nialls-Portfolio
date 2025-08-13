'use client'
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";

interface CardPortfolioProps {
    source: string;
    link: string;
}

export default function CardPortfolio({ source, link }: CardPortfolioProps) {
    return (
        <Link href={link} className="block">
            <Card className="py-4 text-white">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-large uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={source}
                        width={350}
                    />
                </CardBody>
            </Card>
        </Link>
    );
}
