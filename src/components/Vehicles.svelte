<script>
  import Vehicle from "./Vehicle.svelte"

  export let vehicles = []
</script>

<style>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<div class="row">
  {#each vehicles as vehicle, i}
    <Vehicle {vehicle} />
  {/each}
</div>
