<script>
  import { Card, CardBody, Collapse } from "sveltestrap"
  import Vehicles from "./Vehicles.svelte"

  export let dealer = undefined
  export let index = undefined
  export let pick = undefined

  const handleClick = () => {
    pick = pick === index ? undefined : index
  }
</script>

<style>
  .row {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
  }
  .name {
    font-weight: bold;
  }
  .dealer-id {
    font-style: italic;
    color: var(--clrs-gray);
  }
</style>

<Card on:click={handleClick}>
  <CardBody>
    <div class="row">
      <span class="name">{dealer.name}</span>
      <span class="dealer-id">{dealer.dealerId}</span>
    </div>
    <Collapse isOpen={pick === index}>
      <Vehicles vehicles={dealer.vehicles} />
    </Collapse>
  </CardBody>
</Card>
