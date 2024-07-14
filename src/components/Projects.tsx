import Heading from "./Heading";
import ProjectItem from "./ProjectItem";

export default function Projects() {
    /* Project items */
    const projectItems = [
        {
            imgUrl: "https://blog.logrocket.com/wp-content/uploads/2020/11/react-typescript-guide.png",
            title: "Project 1",
            description: "TBA",
            url: "https://github.com/"
        }
    ]

    return (
        <section 
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <Heading title="projects"/>
            <div>
                <ol className="group/list">
                    {projectItems.map((item, index) => (
                        <li key={index} className="mb-12">
                            <ProjectItem imgUrl={item.imgUrl} title={item.title} description={item.description} url={item.url}/>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}