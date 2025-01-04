<script>
  export let step;

  const projectUrl = `projects/${step.slug}`;
</script>

<a
  href={projectUrl}
  class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200 transition hover:scale-105"
>
  <div
    class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
  >
    <i class={step.icon}></i>
  </div>
  <h3 class="font-medium text-3xl sm:text-3xl md:text-2xl">
    {step.title}
  </h3>
  <slot />
  <div class="flex-1 flex justify-between gap-4 items-center">
    <div class="ml-auto cursor-pointer relative overflow-hidden">
      <p class="text-2xl sm:text-3xl relative z-4">
        <i class="fa-solid fa-up-right-from-square"></i>
      </p>
    </div>
  </div>
</a>
