<script>
  import Vehicle from "./Vehicle.svelte"

  export let vehicles = []
</script>

<style>
  .row {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
</style>

<div class="row">
  {#each vehicles as vehicle, i}
    <Vehicle {vehicle} />
  {/each}
</div>
