<script>
  import { Button, ButtonGroup } from 'sveltestrap';
  import { bag, PICK } from '../utils';
  import Dealer from './Dealer.svelte';
  import Refresh from './Refresh.svelte';

  export let dealers = [];
  export let refresh = undefined;

  let pick = 0;

  const init = () => {
    pick = bag.get(PICK) || 0;
  };

  const picker = indx => {
    return () => {
      bag.store(PICK, indx);
      pick = indx;
    };
  };

  init();
</script>

<div>
  <div class="toolbar">
    <Refresh {refresh} />
    <ButtonGroup>
      {#each dealers as dealer, i}
        {#if pick === i}
          <Button on:click={picker(i)} color="warning">{i + 1}</Button>
        {:else}
          <Button on:click={picker(i)}>{i + 1}</Button>
        {/if}
      {/each}
    </ButtonGroup>
  </div>
  <hr />
  <Dealer dealer={dealers[pick]} />
</div>

<style>
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
