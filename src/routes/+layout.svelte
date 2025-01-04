<script>
  import "../app.css";
  import { fade } from "svelte/transition";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;

  export let data;

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<div
  class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
      (y > 0
        ? " opacity-full pointer-events-auto"
        : " pointer-events-none-opactity-0")}
  >
    <button
      on:click={goTop}
      aria-label="go top"
      class="ml-auto rounded-full bg-=slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 curser-pointer"
    >
      <i
        aria-label="top arrow"
        class="fa-solid fa-arrow-up grid place-items-center aspect-square"
      ></i>
    </button>
  </div>
  {#key data.url}
    <div in:fade>
      <Header {y} />
      <slot />
      <Footer />
    </div>
  {/key}
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
