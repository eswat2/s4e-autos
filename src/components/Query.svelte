<script>
  import { getClient, query } from "svelte-apollo"
  import { gql } from "apollo-boost"
  import Spinner from "./Spinner.svelte"
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
  .row {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
  }
</style>

<div class="box">
  {#await $dealerOps}
    <div class="row" aria-busy="true">
      <Spinner />
    </div>
  {:then result}
    <Dealers dealers={result.data.solution.data.dealers} />
  {/await}
</div>
