import { BuildingLibraryIcon, BoltIcon, WrenchScrewdriverIcon, SparklesIcon } from '@heroicons/react/20/solid'
import FiveStars from './five-stars'
import Image from 'next/image'

export default function AboutMe() {
    return (
        <div className="relative isolate overflow-hidden bg-[#000e2f] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 text-white">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[50%] top-[50%] aspect-1155/678 w-144.5 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] bg-linear-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:w-288.75"
                />
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                                About Me
                            </h1>
                            <p className="mt-6 text-xl/8">
                                My passions outside of design include sport and music. I play a number of different sports and I am an all round sports fan. In my spare time, I also like to DJ and go to events, concerts and festivals
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image src="/niall-headshot-1.png" alt="picture of Niall Blackwell" width={1080}
                        height={720} className="w-2xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228" />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 lg:max-w-lg">
                            <ul role="list" className="mt-8 space-y-8">
                                <li className="flex gap-x-3">
                                    <BuildingLibraryIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                    <span>
                                        <strong className="font-semibold">BSc</strong> in Product Design and Technology from the University of Limerick and currently finishing my <strong className="font-semibold">MSc</strong> in Interactive Media Technology at KTH.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <BoltIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                    <span>
                                        Main focus on User Research, UX and Interaction Design.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <WrenchScrewdriverIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                    <span>
                                        Experienced in the end-to-end design process. From research, to user flows, the creation of low and high fidelity prototypes and user testing.</span>
                                </li>
                            </ul>
                            <div className="p-8">
                                <ul role="list" className="mt-8 space-y-8 text-i">
                                    <li className="flex gap-x-3">
                                        <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Competent in end-to-end design process projects. Strong research skills and proficient in displaying findings through creative solutions</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Proficient in using Figma, Adobe suite and  SolidWorks softwares</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Strong communicator with client and internally with team to ensure needs are met in solutions</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Strong team leader ensure direction is on the right path and all deadlines are clearly communicated and met</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <SparklesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#38d586]" />
                                        <span>Passion for delivering informed solutions to improve usability and accessibility of products for stakeholders.</span>
                                    </li>
                                </ul>
                            </div>
                            <div
                                aria-hidden="true"
                                className="absolute inset-y-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                    className="relative top-[50%] aspect-1155/678 w-144.5 -translate-y-1/2 -scale-x-100 rotate-[-90deg] bg-linear-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:w-288.75"
                                />
                            </div>
                            <div className="relative flex flex-col items-center justify-center overflow-hidden px-4">
                                <div className="flex flex-col items-center text-center">
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight">Skills</h2>
                                    <ul role="list" className="mt-8 space-y-8">
                                        <li className="flex gap-x-3 items-center">
                                            <FiveStars />
                                            <span>
                                                <strong className="font-semibold">Problem Solving</strong>
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3 items-center">
                                            <FiveStars />
                                            <span>
                                                <strong className="font-semibold">Research</strong>
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3 items-center">
                                            <FiveStars />
                                            <span>
                                                <strong className="font-semibold">Design Thinking</strong>
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3 items-center">
                                            <FiveStars />
                                            <span>
                                                <strong className="font-semibold">Communication</strong>
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3 items-center">
                                            <FiveStars />
                                            <span>
                                                <strong className="font-semibold">Prototyping</strong>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}