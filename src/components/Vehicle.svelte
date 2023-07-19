<script>
  import { Alert } from 'sveltestrap';
  import { navy } from '../utils';

  export let vehicle = undefined;

  const size = 220;

  $: make = vehicle ? vehicle.make : undefined;

  const cardStyle = group => {
    if (group === 'Gr.X') return 'info';
    if (group.match(/^N d*/)) return 'success';
    if (group.match(/^Gr.d*/)) return 'secondary';
    // NOTE:  if we don't match one of those, it's an unknown group...
    return 'danger';
  };

  // NOTE:  if you'd like to have the icon use the bootstrap theme color,
  //        just replace hex={navy} with hex="currentcolor" in the icon
  //        (see svelte:component below)
</script>

<Alert color={cardStyle(vehicle.group)}>
  <div class="box">
    <div class="info">
      <div class="vin">{vehicle.vin}</div>
      <ul>
        <li class="make">{vehicle.make}</li>
        <li class="model">{vehicle.model}</li>
        <li>{vehicle.year}</li>
        <li>{vehicle.group}</li>
        <li>{vehicle.color}</li>
      </ul>
    </div>
    <div class="ikon" role="img" aria-label={make} title={make}>
      <proto-ikon-loader name={vehicle.make} hex={navy} {size} />
    </div>
  </div>
</Alert>

<style>
  .vin {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 10px;
  }
  .make {
    font-weight: bold;
  }
  .model {
    font-style: italic;
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
