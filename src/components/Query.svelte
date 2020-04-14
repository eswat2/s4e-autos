<script>
  import { getClient, query } from "svelte-apollo"
  import { gql } from "apollo-boost"
  import Spinner from "./Spinner.svelte"
  import Dealers from "./Dealers.svelte"

  const now = () => Date.now().toString()

  const GET_DEALERS = gql`
    query Solution($id: String!) {
      solution(id: $id) {
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
  const dealerOps = query(client, {
    query: GET_DEALERS,
    variables: { id: now() }
  })
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
