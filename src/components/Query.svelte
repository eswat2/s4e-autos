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
  h1 {
    color: var(--clrs-red);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
  }
</style>

<div class="box">
  <h1>Auto Dealers</h1>

  {#await $dealerOps}
    <Spinner class="centered" color="primary" type="border" />
  {:then result}
    <Dealers dealers={result.data.solution.data.dealers} />
  {/await}
</div>
