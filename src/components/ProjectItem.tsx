import Link from "next/link";

export default function ProjectItem({imgUrl, title, description, url, skills}: any) {
    return (
        <>
            <div 
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <a
                        href={url}
                        target="_blank"
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border=[#ADB7BE] hover:border-white group/link"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="26" 
                            height="26" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#ADB7BE" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:stroke-slate-50"
                        >
                                <g 
                                    fill="none" 
                                    fill-rule="evenodd"
                                >
                                    <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/>
                                </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="text-base text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">
                   {title} 
                </h5>
                <p className="text-sm text-[#ADB7BE]">
                    {description}
                </p>
            </div>
        </>
    )
}