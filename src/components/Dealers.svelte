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
    margin-top: 0.67em;
    margin-bottom: 0.67em;
  }
  .toolbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

<div>
  <h1>Auto Dealers</h1>
  <div class="toolbar">
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
