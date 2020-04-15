<script>
  import axios from "axios"
  import Spinner from "./Spinner.svelte"
  import Dealers from "./Dealers.svelte"

  let solution = {}

  const simpleId = () => Date.now().toString()

  const getSolution = id => {
    axios
      .get(`https://mock-gts.eswat2.now.sh/api/solution?id=${id}`)
      .then(response => {
        const { data } = response
        const tmp = { id: data.id, dealers: [...data.data.dealers] }
        console.log(data, tmp)
        // NOTE:  it's too damn fast...
        setTimeout(() => {
          solution = tmp
        }, 1000)
      })
  }

  const refresh = () => {
    solution = {}

    const id = simpleId()
    console.log("-- refresh: ", id)
    getSolution(id)
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
