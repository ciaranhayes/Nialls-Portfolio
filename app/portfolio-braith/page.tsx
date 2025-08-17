import HeaderPortfolio from "@/components/header-portfolio";
import PortBraith from "@/components/info-braith";
import Footer from "@/components/footer";

export default function Braith() {
    return (
        <>
            <HeaderPortfolio href="/#final" />
            <main className="pt-30">
                <PortBraith />
            </main>
            <Footer />
        </>
    );
}