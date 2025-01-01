<script>
  export let data;
</script>

<svelete:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelete:head>

<article class="article mb-5">
  <hgroup>
    <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl pb-5">
      {data.meta.title}
    </h1>
    <p class="font-semibold text-lg sm:text-xl md:text-2xl">
      From {data.meta.start_date} to {data.meta.end_date}
    </p>
  </hgroup>

  <div class="my-3 flex flex-wrap -m-1 mb-10">
    {#each data.meta.categories as category}
      <span
        class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 rounded px-4 py-2 font-bold leading-loose dark:text-gray-300"
        >{category}</span
      >
    {/each}
  </div>

  <div class="prose">
    <data.content />
  </div>
</article>

<style>
  article {
    max-inline-size: var(--size-content-5);
    margin-inline: auto;

    h1 {
      text-transform: capitalize;
    }

    h1 + p {
      margin-top: var(--size-2);
      color: var(--text-2);
    }
  }
</style>
