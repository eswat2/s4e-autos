<script>
  import { Card, CardBody, Collapse } from "sveltestrap"
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
  .name {
    font-size: 20px;
    font-weight: bold;
  }
</style>

<Card>
  <CardBody>
    <div class="box">
      <div class="name">{dealer.name}</div>
      <Vehicles vehicles={dealer.vehicles} />
    </div>
  </CardBody>
</Card>
