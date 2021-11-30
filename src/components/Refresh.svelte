<script>
  export let label = "refresh"
  export let refresh = undefined
</script>

<div
  class="refresh"
  on:click={() => refresh && refresh()}
  aria-label={label}
  role="button"
  title={label}
>
  <proto-ikon-loader name="refresh" size="24" />
</div>

<style>
  .refresh {
    color: var(--clrs-navy);
    cursor: pointer;
  }
  .refresh:hover {
    color: var(--clrs-red);
  }
</style>
