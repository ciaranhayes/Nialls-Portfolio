import CarouselMPower from "./carousel";
import {
    SparklesIcon,
    CalendarDaysIcon,
    ComputerDesktopIcon,
    PencilIcon,
    DocumentMagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import HeaderPortfolio from "./header-portfolio";

export default function PortMpower() {
    return (
        <>
            <HeaderPortfolio />
            <div className="overflow-hidden sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold text-[#38d586]">
                                    Project 1
                                </h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                    Smart MPower
                                </p>
                                <p className="mt-6 text-lg text-gray-300">
                                    The goal of this project was to create an interactive educational module for a start up business in Ireland. The company wanted their story, ethos and goals to be delivered to the website in a module that could be accessed and understood by children, adolescents and adults alike. The final design combines vital information with fun infographics and animations. The project began in the early stages of the design process, researching the company through interviews with employees and in-depth secondary research and continued through wireframing, concept development until a high fidelity concept was created. The company went on to take the design and put it into their website.
                                </p>

                                <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <SparklesIcon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                            />
                                            Interactive module
                                        </dt>{" "}
                                        <dd className="inline">
                                            Creation of an interactive learning module for company’s
                                            website.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <SparklesIcon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                            />
                                            End-to-end process
                                        </dt>{" "}
                                        <dd className="inline">
                                            From research to high-fidelity prototype.
                                        </dd>
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
                                            <dt className="inline font-semibold text-white">Research</dt>{" "}
                                            <dd className="inline">
                                                Conduct research about the company, current projects and
                                                their ethos.
                                            </dd>
                                        </div>
                                        <div className="relative pl-9">
                                            <PencilIcon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                            />
                                            <dt className="inline font-semibold text-white">Sketching</dt>{" "}
                                            <dd className="inline">
                                                Hand sketch wireframes and storyboards mapping the flow.
                                            </dd>
                                        </div>
                                        <div className="relative pl-9">
                                            <ComputerDesktopIcon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                            />
                                            <dt className="inline font-semibold text-white">
                                                Prototyping
                                            </dt>{" "}
                                            <dd className="inline">
                                                Low fidelity wireframes and prototypes in Figma.
                                            </dd>
                                        </div>
                                        <div className="relative pl-9">
                                            <CalendarDaysIcon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 h-5 w-5 text-[#38d586]"
                                            />
                                            <dt className="inline font-semibold text-white">
                                                Deliverable
                                            </dt>{" "}
                                            <dd className="inline">
                                                A more accessible webpage for visitors, making the ethos of
                                                the company clearer.
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <CarouselMPower />
                    </div>
                </div>
            </div>
        </>
    );
}
