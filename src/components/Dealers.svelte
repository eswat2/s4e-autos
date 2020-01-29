<script>
  import { Button, ButtonGroup } from "sveltestrap"
  import Dealer from "./Dealer.svelte"

  export let dealers = []

  let pick = 0
</script>

<style>
  h1 {
    color: var(--clrs-red);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
  }
  .dealer-id {
    color: var(--clrs-gray);
    font-style: italic;
  }
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<div>
  <h1>Auto Dealers</h1>
  <div class="toolbar">
    <span class="dealer-id">{dealers[pick].dealerId}</span>
    <ButtonGroup>
      {#each dealers as dealer, i}
        {#if pick === i}
          <Button on:click={() => (pick = i)} color="warning">{i + 1}</Button>
        {:else}
          <Button on:click={() => (pick = i)}>{i + 1}</Button>
        {/if}
      {/each}
    </ButtonGroup>
  </div>
  <hr />
  <Dealer dealer={dealers[pick]} />
</div>
