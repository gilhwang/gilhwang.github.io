import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Content() {
    return (
        <div>
            <main className="pt-24 lg:w-1/2 lg:py-24">
                <About/>
                <Experience/>
                <Projects/>
            </main>
        </div>
    )
}