import Heading from "./Heading";

export default function About() {
    return (
        <section 
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <Heading title="About"/>
            <p className="mb-4 text-lg text-slate-400">
                I am currently working as a 5G software developer in Ericsson Canada, during my Professional Experience Year (PEY) Co-op.
                I am proficient in C, C++ and Python and capable of working on Artificial Intelligence(AI) and Machine Learning (ML) projects.
            </p>
        </section>
    )
}