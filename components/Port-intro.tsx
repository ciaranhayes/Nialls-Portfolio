import Carousel from "./carousel";
import { SparklesIcon, CalendarDaysIcon, ComputerDesktopIcon, PencilIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/20/solid'

const images = ["/portfolio-stuff.png", "/portfolio-logo-0.png"]

export default function PortIntro() {
    return (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 text-white">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:w-[72rem]"
                />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 text-white">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                            Project 1 - Smart MPower
                        </h1>
                        <p className="mt-6 text-xl/8">
                            Get Niall to give you text
                        </p>
                    </div>
                </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Carousel imageUrls={images} />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base/7 lg:max-w-lg">
                        <ul role="list" className="mt-8 space-y-8">
                            <li className="flex gap-x-3">
                                <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                <span>Creation of an interactive learning module for company’s website.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                <span>End-to-end design process from research to high-fidelity prototype.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                <span>Proficient use of Figma</span>
                            </li>
                        </ul>
                        <div id="skills" className="p-8">
                                <ul role="list" className="mt-8 space-y-8 text-i">
                                    <li className="flex gap-x-3">
                                        <DocumentMagnifyingGlassIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Conduct research about the company, what they do, current projects and their ethos.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <PencilIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Creation of hand sketch wireframes and storyboards, mapping the flow of the interactive module</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ComputerDesktopIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Moving to low fidelity wireframes and prototypes on Figma</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CalendarDaysIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Deliverable: A more accessible webpage for visitors who are unaware of the concept, making the ethos of the company more well known.</span>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}