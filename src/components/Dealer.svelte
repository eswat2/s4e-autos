<script>
  import { Alert } from "sveltestrap"
  import Vehicles from "./Vehicles.svelte"

  export let dealer = undefined

  const sortVehicles = vehicles => {
    return vehicles.sort((a, b) => {
      const group1 = a.group.match(/^N /g) ? a.group.slice(2) : a.group
      const group2 = b.group.match(/^N /g) ? b.group.slice(2) : b.group
      if (group1 > group2) return 1
      if (group1 < group2) return -1
      return 0
    })
  }
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
    font-size: 1.5rem;
    font-weight: bold;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 500px) {
    .name {
      font-size: 1.2rem;
      text-align: center;
    }
    .row {
      flex-direction: column;
    }
  }
</style>

<div class="box">
  <Alert color="primary">
    <div class="row">
      <span class="name">
        {dealer.name}
        <sup>{dealer.vehicles.length}</sup>
      </span>
      <span class="dealer-id">{dealer.dealerId}</span>
    </div>
  </Alert>
  <Vehicles vehicles={sortVehicles(dealer.vehicles)} />
</div>
