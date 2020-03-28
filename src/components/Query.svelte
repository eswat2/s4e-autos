<script>
  import { getClient, query } from "svelte-apollo"
  import { gql } from "apollo-boost"
  import { Spinner } from "sveltestrap"
  import Dealers from "./Dealers.svelte"

  const GET_DEALERS = gql`
    {
      solution {
        id
        data {
          dealers {
            dealerId
            name
            vehicles {
              vin
              year
              make
              model
              group
              color
              exotic
            }
          }
        }
      }
    }
  `

  const client = getClient()
  const dealerOps = query(client, { query: GET_DEALERS })
</script>

<style>
  .box {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="box">
  {#await $dealerOps}
    <Spinner class="centered" color="primary" type="border" />
  {:then result}
    <Dealers dealers={result.data.solution.data.dealers} />
  {/await}
</div>
