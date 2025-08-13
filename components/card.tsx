'use client'
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function CardPortfolio() {
    return (
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
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={350}
                />
            </CardBody>
        </Card>
    );
}