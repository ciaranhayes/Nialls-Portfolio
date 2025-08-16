import HeaderPortfolio from "@/components/header-portfolio"
import Features from "@/components/features-portfolio"
import Carousel from "@/components/carousel"

const images = ["/portfolio-stuff.png", "/portfolio-logo-0.png"]

export default function MPower() {
    return (
        <>
            <HeaderPortfolio href="/#mpower"/>
            <Carousel />
            <Features />
        </>
    )
}
