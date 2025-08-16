import CardPortfolio from "./card"

export default function Portfolio() {
    return (
        <div id="portfolio" className="relative bg-[#000e2f] py-24 sm:py-32 text-white">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -z-100 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[50%] top-[50%] aspect-1155/678 w-144.5 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] bg-linear-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:w-288.75"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 z-40 w-w">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-right">My Portfolio</h2>
                    <p className="mt-2 text-lg/8 text-right">Explore a selection of my design projects, ranging from interactive web modules to rapid design challenges and my final bachelor’s industrial design project. Each piece showcases my end-to-end design process, including research, user flows, storyboarding, prototyping, and testing, all crafted with a focus on usability, engagement, and impactful visual design.</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <CardPortfolio id="mpower" link="/portfolio-mpower" source="/portfolio-logo-0.png" alt="Logo" text="I designed an interactive learning module for our company’s website, leading the full process from initial research and user journey mapping through wireframes, usability testing, and high-fidelity prototyping. Using Figma, I created a scalable design system and interactive prototypes that brought the experience to life, ensuring the module was both intuitive and engaging. By combining user-centered design with close collaboration across teams, the final solution aligned seamlessly with business goals while delivering a smooth learning experience for users." title="SMART MPOWER" tag1={["End-to-end Design", "Figma", "Interactive Learning"]}/>
                    <CardPortfolio id="spotify" link="/portfolio-spotify" source="/portfolio-logo-2.png" alt="Logo" text="I completed a rapid design challenge that involved applying key UX methods such as mapping, storyboarding, and user flow development to quickly define the user journey. From there, I created mid-fidelity mock-ups to visualize and refine potential solutions, ensuring clarity and usability at each stage. Using Figma, I was able to efficiently prototype and iterate, balancing speed with design quality to deliver impactful results within a short timeframe." title="SPOTIFY DESIGN CHALLENGE" tag1={['Storyboards', "Rapid Design", "Mapping", "User Flows", "Mid-fidelity Mock-ups", "Figma"]}/>
                    <CardPortfolio id="final" link="/portfolio-braith" source="/portfolio-logo-3.png" alt="Logo" text="For my final bachelor’s project in industrial design, I led an end-to-end design process that combined research, stakeholder communication, prototyping, and user testing. By applying a range of research techniques and maintaining close collaboration with stakeholders, I was able to define user needs and translate them into practical design solutions. Through iterative prototyping and testing, I refined the concept into a final outcome that balanced functionality, usability, and innovation." title="FINAL DESIGN PROJECT" tag1={["End-to-end Design", "Research Techniques", "Stakeholder Communication", "Prototyping", "User Testing"]}/>
                </div>
            </div>
            <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#38d586] to-[#ffffff] opacity-50 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
        </div>
    )
}