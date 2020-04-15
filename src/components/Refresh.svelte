<script>
  import { Refresh } from "s4e-icons"

  export let label = "refresh"
  export let refresh = undefined
</script>

<style>
  .refresh {
    fill: var(--clrs-navy);
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
  .refresh:hover {
    fill: var(--clrs-red);
  }
</style>

<div
  class="refresh"
  on:click={() => refresh && refresh()}
  aria-label={label}
  title={label}>
  <Refresh />
</div>
