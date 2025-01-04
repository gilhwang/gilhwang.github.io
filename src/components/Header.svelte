<script>
  import { page } from "$app/stores";

  export let y;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    // {name: 'Blog', '#projects'},
  ];
  let socialMediaLink = "https://www.linkedin.com/in/gil-hwang/";
  $: isHomePage = $page.url.pathname === "/";
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <a href="/">
    <h1 class="text-4xl lg:text-3xl md:text-4xl sm:text-5xl">
      <b font="font-bold poppins">GH</b>
    </h1>
  </a>
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#if isHomePage}
      {#each tabs as tab, index}
        <a href={tab.link} class="duration-200 hover:text-violet-400">
          <p>{tab.name}</p>
        </a>
      {/each}
    {/if}
    <a
      href={socialMediaLink}
      class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
      target="_blank"
    >
      <div
        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                    group-hover:translate-x-full z-0 duration-200"
      ></div>
      <h4 class="relative z-9">Get in touch</h4>
    </a>
  </div>
</header>
