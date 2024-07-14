import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Content() {
    return (
        <div>
            <main className="pt-24 lg:w-2/3 lg:py-24 lg:ml-3">
                <About/>
                <Experience/>
                <Projects/>
            </main>
        </div>
    )
}