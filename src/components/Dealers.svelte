<script>
  import { Button, ButtonGroup } from "sveltestrap"
  import { Refresh } from "s4e-icons"
  import Dealer from "./Dealer.svelte"

  export let dealers = []
  export let refresh = undefined

  let pick = 0
</script>

<style>
  .refresh {
    fill: var(--clrs-navy);
    cursor: pointer;
  }
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

<div>
  <div class="toolbar">
    <div
      class="refresh"
      on:click={() => refresh && refresh()}
      aria-label="refresh"
      title="refresh">
      <Refresh />
    </div>
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
