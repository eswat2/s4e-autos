<script>
  import Vehicle from './Vehicle.svelte';

  export let vehicles = [];
</script>

<div class="row">
  {#each vehicles as vehicle, i}
    <Vehicle {vehicle} />
  {/each}
</div>

<style>
  .row {
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
