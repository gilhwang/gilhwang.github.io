import ExperienceItem from "./ExperienceItem"
import Heading from "./Heading"

export default function Experience() {
    /* Experience items */
    const experienceItems = [
        {
            year: "2023 - Present",
            name: "5G Software Developer",
            company: "Ericsson",
            link: "https://www.ericsson.com/en",
            description: "Developed integrated software solution combining existing telecommunication techniques with AI/ML.",
            skills: ["C", "C++", "Python"]
        },
        {
            year: "2022 - 2023",
            name: "General Member",
            company: "University of Toronto Autonomous Rover Team (UTRA ART)",
            link: "https://www.utra.ca/teams/ART/",
            description: "Contributed into Computer Vision area of the autonomous rover, and tested the application of pretrained YOLOPv2 model on lane detection",
            skills: ["Python", "PyTorch"]
        },
        {
            year: "2020 - 2022",
            name: "Computer Technician",
            company: "Republic of Korea Navy",
            link: "https://www.navy.mil.kr/mbshome/mbs/eng/index.do",
            description: "Assisted satellite communication between warships for sending and receiving confidential military documents, and lead IT support team to troubleshoot general network, software and hardware issues",
            skills: ["General IT", "Teamwork", "Leadership"]
        },
        {
            year: "2017",
            name: "Office Assistant",
            company: "MD Financial Management",
            link: "https://mdm.ca/md-financial-management?gad_source=1&gclid=CjwKCAjw4f6zBhBVEiwATEHFVhIfxW45yaLxTc0PaYg0imSo0BDcFZXUJUKOtoQtFy_KA4Oj477OTRoCnVUQAvD_BwE",
            description: "Verified client application forms to detect incorrect or missing information, and reviewed the fund-distributing software to check whether the funds are distributed correctly",
            skills: ["Teamwork", "General Office skills"]
        }
    ]
    
    return (
        <section 
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <Heading title="Experience"/>
            <div>
                <ol className="group/list">
                    {experienceItems.map((item, index) => (
                        <li key={index} className="mb-12">
                            <ExperienceItem year={item.year} name={item.name} company={item.company} link={item.link} description={item.description} skills={item.skills}/>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}