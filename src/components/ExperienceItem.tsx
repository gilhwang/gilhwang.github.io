export default function ExperienceItem({year, name, company, link, description, skills}: any) {
    return (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
            </div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {year}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                    <a 
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-xl"
                        href={link}
                        target="_blank"
                    >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                        <span>
                            {name} 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor"
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="inline-block ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x1-1 motion-reduce:transition-none translate-y-px"
                            >
                                <path d="M7 17l9.2-9.2M17 17V7H7"/>
                            </svg>
                        </span>
                    </a>    
                </h3>
                <h3 className="font-medium leading-snug text-slate-300">
                    {company}
                </h3>
                <p className="mt-2 text-base leading-normal text-slate-400">
                    {description}
                </p>
                <ul className="mt-2 flex flex-wrap">
                {skills.map((skill: string, index: number) => (
                    <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {skill}
                        </div>
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    )
}