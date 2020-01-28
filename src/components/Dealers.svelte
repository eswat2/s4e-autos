<script>
  import { getClient, query } from "svelte-apollo"
  import { gql } from "apollo-boost"
  import { Spinner } from "sveltestrap"
  import Dealer from "./Dealer.svelte"

  const GET_DEALERS = gql`
    {
      solution {
        id
        data {
          dealers {
            dealerId
            name
            vehicles {
              vehicleId
              year
              make
              model
            }
          }
        }
      }
      icons
    }
  `

  const client = getClient()
  const dealerOps = query(client, { query: GET_DEALERS })

  let pick = undefined
</script>

<style>
  .row {
    display: flex;
    justify-content: center;
  }
</style>

<div>
  {#await $dealerOps}
    <div class="row">
      <Spinner class="centered" color="primary" type="border" />
    </div>
  {:then result}
    {#each result.data.solution.data.dealers as dealer, i}
      <Dealer {dealer} index={i} bind:pick />
    {/each}
  {/await}
</div>
