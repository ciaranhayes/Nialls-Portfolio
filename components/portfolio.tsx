import CardPortfolio from "./card"
import Link from "next/link"

export default function Portfolio() {
    return (
        <div className="relative bg-[#000e2f] py-24 sm:py-32 text-white">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -z-40 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[50%] top-[50%] aspect-1155/678 w-144.5 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] bg-linear-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:w-288.75"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">My Portfolio</h2>
                    <p className="mt-2 text-lg/8">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <Link href="/portfolio">
                        <CardPortfolio />
                    </Link>
                    <CardPortfolio />
                    <CardPortfolio />
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-0 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="w-[36.125rem] aspect-[1155/678] -rotate-90 bg-gradient-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:w-[72.1875rem]"
                />
            </div>
        </div>
    )
}