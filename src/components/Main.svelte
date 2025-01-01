<script>
  import Step from "./Step.svelte";

  const resumeLink = "assets/resume.pdf";
  export let data;

  let benefits = [
    { name: "Ericsson", description: "software developer" },
    {
      name: "University of Toronto Autonomous Rover Team (UTRA ART)",
      description: "general memeber",
    },
    {
      name: "Republic of Korea Navy",
      description: "Computer Technician",
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
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Gil</span> Hwang
      </h2>
      <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl">I am...</h3>
      <h3 class="font-base text-lg sm:text-xl md:text-2xl">
        a Computer Engineering <span class="poppins text-violet-400"
          >Student</span
        >
        at University of Toronto<br /> & Software
        <span class="poppins text-violet-400">Developer</span> at Ericsson Canada
      </h3>
      <p class="text-base sm:text-lg md:text-xl">
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
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
      after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-7"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">What can I do?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        My <span class="poppins text-violet-400">Projects</span>
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      {#each data.posts as post}
        <Step step={post}>
          <p class="description">{post.description}</p>
        </Step>
      {/each}
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
      after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-7"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">What did I do?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        My <span class="poppins text-violet-400">Experience</span>
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
