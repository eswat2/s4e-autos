<script>
  import { Card, CardBody } from "sveltestrap"

  export let vehicle = undefined
</script>

<style>
  .vin {
    font-style: italic;
    color: var(--clrs-slate4);
    margin-bottom: 10px;
  }
  .make {
    font-weight: bold;
  }
</style>

<Card>
  <CardBody>
    <div class="vin">{vehicle.vehicleId}</div>
    <ul>
      <li class="make">{vehicle.make}</li>
      <li>{vehicle.model}</li>
      <li>{vehicle.year}</li>
    </ul>
  </CardBody>
</Card>
