<script>
  import { Alert } from "sveltestrap"
  import Vehicles from "./Vehicles.svelte"

  export let dealer = undefined

  const sortedGroups = [
    "N 100",
    "N 200",
    "N 300",
    "N 400",
    "N 500",
    "N 600",
    "N 700",
    "N 800",
    "N 1000",
    "Gr.1",
    "Gr.2",
    "Gr.3",
    "Gr.4",
    "Gr.B Rally",
    "Gr.X",
  ]

  const sortVehicles = (vehicles) => {
    return vehicles
      .sort((a, b) => {
        if (a.make > b.make) return 1
        if (a.make < b.make) return -1
        return 0
      })
      .sort((a, b) => {
        const group1 = sortedGroups.includes(a.group)
          ? sortedGroups.indexOf(a.group)
          : 100
        const group2 = sortedGroups.includes(b.group)
          ? sortedGroups.indexOf(b.group)
          : 100
        if (group1 > group2) return 1
        if (group1 < group2) return -1
        return 0
      })
  }
</script>

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
