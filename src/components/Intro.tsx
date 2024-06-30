import SocialLinks from "./SocialLinks";

export default function Intro(){
return (
    <header className="mr-3 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl whitespace-nowrap">
                Gil Hwang
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
                Computer Engineering at University of Toronto
            </p>
        </div>
        <SocialLinks/>
    </header>
)
}
