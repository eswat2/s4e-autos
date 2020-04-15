<script>
  import { setupClient, query } from "svql"
  import Spinner from "./Spinner.svelte"
  import Dealers from "./Dealers.svelte"

  const simpleId = () => Date.now().toString()

  setupClient({
    url: "https://gt-sports.eswat2.now.sh/graphql"
  })

  const GET_DEALERS = `
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

  let dealers = undefined

  const refresh = () => {
    dealers = undefined
    const id = simpleId()
    console.log("-- refresh: ", id)
    query(GET_DEALERS, { id }).then(data => {
      const list = JSON.parse(JSON.stringify(data.solution.data.dealers))
      setTimeout(() => {
        console.log("-- update: ", id, list)
        dealers = list
      }, 1000)
    })
  }

  refresh()
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
  {#if !dealers}
    <div class="row" aria-busy="true">
      <Spinner />
    </div>
  {:else}
    <Dealers {dealers} {refresh} />
  {/if}
</div>
