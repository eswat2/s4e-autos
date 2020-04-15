<script>
  import axios from "axios"
  import Spinner from "./Spinner.svelte"
  import Dealers from "./Dealers.svelte"

  let solution = {}

  const getSolutionForId = id => {
    // NOTE:  step 2 - retrieve the solution for this id...
    axios
      .get(`https://mock-gts.eswat2.now.sh/api/solution?id=${id}`)
      .then(response => {
        const { data } = response
        const tmp = { id: data.id, dealers: [...data.data.dealers] }
        console.log("-- solution: ", data.id, tmp)
        // NOTE:  it's too damn fast... [ defer setting the value ]
        setTimeout(() => {
          solution = tmp
        }, 1000)
      })
  }

  const getSolution = () => {
    // NOTE:  step 1 - retrieve a uuid...
    axios
      .get(`https://mock-x43.eswat2.now.sh/api/uuid?count=1`)
      .then(response => {
        const { data } = response
        const id = data[0]
        console.log("-- refresh: ", id)
        getSolutionForId(id)
      })
  }

  const refresh = () => {
    solution = {}

    getSolution()
  }

  $: {
    console.log("-- update: ", solution)
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
  {#if !solution.dealers}
    <div class="row" aria-busy="true">
      <Spinner />
    </div>
  {:else}
    <Dealers dealers={solution.dealers} {refresh} />
  {/if}
</div>
