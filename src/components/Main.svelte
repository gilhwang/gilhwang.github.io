<script>
  import Heading from "./Heading.svelte";
  import Step from "./Step.svelte";

  const resumeLink = "assets/resume.pdf";
  export let data;

  let experiences = [
    {
      company: "Ericsson",
      companyLink: "https://www.ericsson.com/en",
      location: "Ottawa, ON, Canada",
      title: "Software Developer Intern",
      description: [
        "Developed a Machine Learning prototype software using C++ that outperformed the current radio product",
        "Developed a real-time AI model using Python that interacts bi-directionally with the current radio product, by utilizing both Reinforcement Learning and Deep Learning",
        "Developed a simulation software using Python that trains a neural network model to perform QPSK demodulation, which outperforms the error rate of the current radio product",
        "Verified reliability of the software by implementing unit tests using Google Test and conducting end-to-end test in a simulated environment",
        "Presented an overview and the performance result of AI projects multiple times to both technical and non-technical audience, such as managers, developers and customers",
        "Continuing to contribute to the currently involved projects as a part-time basis",
      ],
      logo: "images/logo/ericsson_logo.svg",
      altLogo: "ericsson-logo",
      startDate: "May 2023",
      endDate: "Present",
    },
    {
      company: "University of Toronto Autonomous Rover Team (UTRA ART)",
      companyLink: "https://www.utra.ca/teams/ART/",
      location: "Toronto, ON, Canada",
      title: "General Member",
      description: [
        "Contributed into Computer Vision area of the autonomous rover using Python and PyTorch",
        "Researched on the application of a pre-trained YOLOPv2 model on lane detection",
      ],
      logo: "images/logo/utra_logo.png",
      altLogo: "utra-logo",
      startDate: "August 2022",
      endDate: "December 2022",
    },
    {
      company: "Republic of Korea Navy",
      companyLink: "https://www.navy.mil.kr/mbshome/mbs/eng/index.do",
      location: "Republic of Korea",
      title: "Computer Technician",
      description: [
        "Assisted satellite communication between warships by receiving and sending confidential military documents",
        "Lead IT support team that troubleshoots general network, software and hardware issues such as network disruption and computer/printer malfunction",
      ],
      logo: "images/logo/navy_logo.png",
      altLogo: "navy-logo",
      startDate: "July 2020",
      endDate: "March 2022",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Gil</span> Hwang
      </h2>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">I am...</h3>
      <h3 class="font-base text-2xl md:text-3xl">
        a Computer Engineering <span class="poppins text-violet-400"
          >Student</span
        >
        at University of Toronto<br /> & Software
        <span class="poppins text-violet-400">Developer</span> at Ericsson Canada
      </h3>
      <p class="text-xl sm:text-lg md:text-2xl">
        My <span class="text-violet-400">favorite tech</span> includes C/C++, Python,
        CUDA and Artificial Intelligence
      </p>
      <a
        target="_blank"
        href={resumeLink}
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                    group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">See Resume &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="My profile img"
        class="object-cover z-[2] max-h-[70vh] rounded-full border-4 border-white"
      />
    </div>
  </section>

  <Heading
    id="projects"
    subheading="What can I do?"
    headingNoHighlight="My"
    headingHighlight="Projects"
  ></Heading>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
    {#each data.posts as post}
      <Step step={post}>
        <p class="description text-lg sm:text-base">
          {post.description}
        </p>
      </Step>
    {/each}
  </div>

  <Heading
    id="experience"
    subheading="What did I do?"
    headingNoHighlight="My"
    headingHighlight="Experience"
  ></Heading>

  <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
    {#each experiences as experience, index}
      <div class="flex flex-col gap-6 sm:gap-8">
        <div class="flex flex-row gap-3 sm:gap-5">
          <a href={experience.companyLink} target="_blank">
            <img
              alt={experience.altLogo}
              src={experience.logo}
              class="size-24 min-w-24 min-h-24 sm:size-20 sm:min-w-20 sm:min-h-20 dark:shadow-gray-800 rounded-lg bg-white transition duration-500 hover:scale-110"
            />
          </a>

          <div class="flex-col">
            <h3 class="text-2xl sm:text-3xl md:text-3xl">
              {experience.title}
            </h3>
            <h3 class="font-bold text-4xl sm:text-3xl md:text-4xl">
              {experience.company}
            </h3>
          </div>
        </div>
        <h3 class="text-right text-2xl sm:xl md:2xl text-gray-300">
          {experience.startDate} - {experience.endDate}
        </h3>
        <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
          {#each experience.description as point}
            <li class="flex items-start space-x-3 rtl:space-x-reverse">
              <svg
                class="flex-shrink-0 size-7 sm:size-6 align-text-top text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span class="text-2xl sm:text-xl">{point}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  <Heading
    id="education"
    subheading="Where did I learn?"
    headingNoHighlight="My"
    headingHighlight="Education"
  ></Heading>
</main>
