<script>
  export let id;
  export let subheading;
  export let headingHighlight;
  export let headingNoHighlight;
</script>

<section {id} class="py-20 lg:py-32 flex flex-col gap-24">
  <div
    class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
      after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-7"
  >
    <h6 class="text-xl sm:text-2xl md:text-3xl">{subheading}</h6>
    <h3 class="font-semibold text-6xl sm:text-5xl">
      {headingNoHighlight}
      <span class="poppins text-violet-400">{headingHighlight}</span>
    </h3>
  </div>
</section>
