<script>
  import { page } from "$app/stores";
</script>

<div>
  <h1 class="h-full grid place-content-center">
    {$page.stats}: {$page.error?.message}
  </h1>
</div>
