import ExperienceItem from "./ExperienceItem"

export default function Experience() {
    /* Experience items */
    const experienceItems = [
        {
            year: "2023 - Present",
            name: "5G Software Developer",
            link: "https://www.ericsson.com/en",
            description: "Develop integrated software solution combining existing telecommunication techniques with AI/ML.",
            skills: ["C", "C++", "Python"]
        }
    ]
    
    return (
        <section 
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience    
                </h2>   
            </div>
            <div>
                <ol className="group/list">
                    {experienceItems.map((item, index) => (
                        <li key={index}>
                            <ExperienceItem year={item.year} name={item.name} link={item.link} description={item.description} skills={item.skills}/>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}