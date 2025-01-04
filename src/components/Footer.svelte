<script>
  const year = new Date().getFullYear();
</script>

<footer
  class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center text-lg sm:text-base md:text-lg"
>
  <h2 class="px-4 py-2 bg-white text-slate-950 font-medium">
    Connect with me &darr;
  </h2>
  <div class="flex flex-col gap-4 items-center justify-center">
    <h2>
      <i class="fa-regular fa-envelope"></i>
      <b class="pr-2">Email</b> il.hwang@mail.utoronto.ca
    </h2>
    <h2>
      <i class="fa-brands fa-github"></i>
      <b class="pr-2">GitHub</b>
      <a
        class="text-violet-400"
        target="_blank"
        href="https://github.com/gilhwang"
      >
        gilhwang<sup>
          <span class="text-xs scale-75 pl-0.5">
            <i
              class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
            ></i>
          </span></sup
        >
      </a>
    </h2>
    <h2>
      <i class="fa-brands fa-linkedin"></i>
      <b class="pr-2">Linkedin</b>
      <a
        class="text-violet-400"
        target="_blank"
        href="https://www.linkedin.com/in/gil-hwang/"
      >
        Gil Hwang<sup>
          <span class="text-xs scale-75 pl-0.5">
            <i
              class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
            ></i>
          </span></sup
        >
      </a>
    </h2>
  </div>
  <h2 class="justify-center">Built with Sveltekit, Tailwind CSS and MDsveX</h2>
  <h2>&copy; {year} Gil Hwang. All rights are reserved.</h2>
</footer>
