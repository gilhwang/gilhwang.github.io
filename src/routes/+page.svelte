<script>
  import * as config from "$lib/config";
  import Main from "../components/Main.svelte";

  export let data;
</script>

<Main {data} />

<svelte:head>
  <title>{config.title}</title>
</svelte:head>
