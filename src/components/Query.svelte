<script>
  import { setupClient, query } from "svql"
  import Spinner from "./Spinner.svelte"
  import Dealers from "./Dealers.svelte"

  setupClient({
    url: "https://gt-sports.eswat2.now.sh/graphql"
  })

  const GET_UUID = `
    query Uuid($count: Int!) {
      uuid(count: $count)
    }
  `
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
    const count = 1
    dealers = undefined

    // NOTE:  step 1 - fetch a UUID...
    query(GET_UUID, { count }).then(data => {
      const id = data.uuid[0]

      // NOTE:  step 2 - fetch a solution with this id...
      query(GET_DEALERS, { id }).then(data => {
        const list = JSON.parse(JSON.stringify(data.solution.data.dealers))
        const solution = { id, list }

        setTimeout(() => {
          dealers = solution.list
        }, 1000)
      })
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
