<script>
  import { Alert } from "sveltestrap"
  import Vehicles from "./Vehicles.svelte"

  export let dealer = undefined
</script>

<style>
  .box {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }
  .dealer-id {
    font-style: italic;
  }
  .name {
    font-size: 20px;
    font-weight: bold;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

<div class="box">
  <Alert color="primary">
    <div class="row">
      <span class="name">{dealer.name}</span>
      <span class="dealer-id">{dealer.dealerId}</span>
    </div>
  </Alert>
  <Vehicles vehicles={dealer.vehicles} />
</div>
