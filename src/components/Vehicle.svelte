<script>
  import { Alert } from "sveltestrap"
  import * as Ikons from "s4e-ikons"
  import { Pulse } from "s4e-icons"
  import { navy } from "../utils"

  export let vehicle = undefined

  const size = 240

  const iconFor = item => {
    const tag = item.make
      .toLowerCase()
      .replace("-", " ")
      .split(" ")
      .join("_")

    return Ikons[tag] || Pulse
  }
  // NOTE:  if you'd like to have the icon use the bootstrap theme color,
  //        just replace hex={navy} with hex="currentcolor" in the icon
  //        (see svelte:component below)
</script>

<style>
  .vin {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 10px;
  }
  .make {
    font-weight: bold;
  }
  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .info {
    display: flex;
    flex-direction: column;
    order: 1;
  }
  .ikon {
    order: 2;
  }
  @media (max-width: 700px) {
    .vin {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    .vin {
      font-size: 1.5rem;
    }
    .box {
      flex-direction: column;
      align-items: center;
    }
    .info {
      order: 2;
    }
    .ikon {
      order: 1;
      margin-bottom: 20px;
    }
  }
</style>

<Alert color="success">
  <div class="box">
    <div class="info">
      <div class="vin">{vehicle.vehicleId}</div>
      <ul>
        <li class="make">{vehicle.make}</li>
        <li>{vehicle.model}</li>
        <li>{vehicle.year}</li>
      </ul>
    </div>
    <div class="ikon">
      <svelte:component this={iconFor(vehicle)} hex={navy} {size} />
    </div>
  </div>
</Alert>
