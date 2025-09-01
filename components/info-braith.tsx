import CarouselBraith from './braith'
import { SparklesIcon, CogIcon, ComputerDesktopIcon, PencilIcon, DocumentMagnifyingGlassIcon, NewspaperIcon } from '@heroicons/react/20/solid'

const images = ["/portfolio-stuff.png", "/portfolio-logo-0.png"]

export default function PortBraith() {
    return (
        <div className="overflow-hidden sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-[#38d586]">
                                Project 3
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Final Design Project
                            </p>
                            <p className="mt-6 text-lg text-gray-300">
                                Get Niall to give you text
                            </p>

                            <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <SparklesIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        Final bachelor's project
                                    </dt>{" "}
                                    <dd className="inline">
                                        industrial design project
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <SparklesIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        End-to-end design process
                                    </dt>{" "}
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <SparklesIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        Research techniques, stakeholder communication, prototyping and user testing
                                    </dt>{" "}
                                </div>
                            </dl>

                            <div className='ml-10'>
                                <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <DocumentMagnifyingGlassIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">Research</dt>{" "}
                                        <dd className="inline">
                                            Conduct research in key stakeholders, secondary stakeholders and into the product situation.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <PencilIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">Ideation</dt>{" "}
                                        <dd className="inline">
                                            through sketches, prototypes and develop these towards the final solution through user testing and stakeholder feedback.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <NewspaperIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">
                                            Affinity diagrams
                                        </dt>{" "}
                                        <dd className="inline">
                                            Create affinity diagrams, observation-problem-needs, and build a design guide for solution.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <CogIcon
                                            aria-hidden="true"
                                            className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                        />
                                        <dt className="inline font-semibold text-white">
                                            Design
                                        </dt>{" "}
                                        <dd className="inline">
                                            for manufacture and build final prototype
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <CarouselBraith />
                </div>
            </div>
        </div>
    )
}