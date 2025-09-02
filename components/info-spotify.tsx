import { SparklesIcon, ComputerDesktopIcon, PencilIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/20/solid'
import CarouselSpotify from './carouselSpotfiy'
import Image from 'next/image'
import { PresentationChartBarIcon } from '@heroicons/react/24/outline'

export default function PortSpotify() {
    return (
        <div className="overflow-hidden sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-[#38d586]">
                                Project 2
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Spotify
                            </p>
                            <p className="mt-6 text-lg text-gray-300">
                                The brief for this rapid design challenge presented to me was how might Spotify better serve music discovery behaviors using AI on new or existing surfaces based on both implicit and explicit signals? The idea of this design challenge was to learn and understand rapid design thinking and creatively designing new surfaces for Spotify. The goal was to research and find new signals that Spotify may not have previously used or one that could be used in a different way. The final concept was one where users could discover through music through their location and connect with new people who have similar taste in music.
                            </p>

                            <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <SparklesIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        Rapid design
                                    </dt>{" "}
                                    <dd className="inline">
                                        challenge involving rapid design
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <SparklesIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        Mapping, storyboards, user flows, mid-fidelity mock-ups
                                    </dt>{" "}
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <SparklesIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        Tools
                                    </dt>{" "}
                                    <dd className="inline">Proficient use of Figma.</dd>
                                </div>
                            </dl>

                            <div className='ml-10'>
                                <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <DocumentMagnifyingGlassIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">Mapping</dt>{" "}
                                        <dd className="inline">
                                            Map current user flows for all stakeholders in the discovery of new music on Spotify.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <PencilIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">Ideation</dt>{" "}
                                        <dd className="inline">
                                            new ideas ideated, using storyboards and group brainstorming to find solutions.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <ComputerDesktopIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">
                                            Mid-fidelity mock-ups
                                        </dt>{" "}
                                        <dd className="inline">
                                            Creation of mid-fidelity mock-ups on figma to present idea to the client (Spotify).
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <PresentationChartBarIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">
                                            Presentation
                                        </dt>{" "}
                                        <dd className="inline">
                                            Ideas successfully presented
                                        </dd>
                                    </div>
                                    <div className="flex justify-center mt-20">
                                        <Image
                                            src="/photo2-3.png"
                                            alt="photo for spotify design"
                                            width={300}
                                            height={500}
                                            className="rounded-lg shadow-lg"
                                        />
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <CarouselSpotify />
                </div>
            </div>
        </div>
    )
}