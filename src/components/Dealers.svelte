<script>
  import { Button, ButtonGroup } from "sveltestrap"
  import Dealer from "./Dealer.svelte"
  import Refresh from "./Refresh.svelte"

  export let dealers = []
  export let refresh = undefined

  let pick = 0
</script>

<style>
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
    <Refresh {refresh} />
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
