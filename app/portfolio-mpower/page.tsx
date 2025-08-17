import HeaderPortfolio from "@/components/header-portfolio"
import Features from "@/components/features-portfolio"
import PortIntro from "@/components/Port-intro"
import Footer from "@/components/footer"

export default function MPower() {
    return (
        <>
            <HeaderPortfolio href="/#mpower" />
            <main className="pt-30">
                <PortIntro />
            </main>
            <Footer />
        </>
    )
}
