<script>
  import { Card, CardBody } from "sveltestrap"

  export let vehicle = undefined
</script>

<style>
  .vin {
    font-style: italic;
    color: var(--clrs-slate4);
  }
  .make {
    font-weight: bold;
  }
</style>

<Card>
  <CardBody style="width: 240px">
    <span class="vin">{vehicle.vehicleId}</span>
    <ul>
      <li class="make">{vehicle.make}</li>
      <li>{vehicle.model}</li>
      <li>{vehicle.year}</li>
    </ul>
  </CardBody>
</Card>
