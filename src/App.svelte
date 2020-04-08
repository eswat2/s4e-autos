<script>
  import ApolloClient from "apollo-boost"
  import { setClient } from "svelte-apollo"
  import { Eswat2, Footer, Query } from "./components"

  const client = new ApolloClient({
    uri: "https://gt-sports.eswat2.now.sh/graphql",

    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors)
      console.log("networkError", networkError)
    }
  })

  setClient(client)
</script>

<style>
  :root {
    --clrs-navy: #001f3f;
    --clrs-blue: #0074d9;
    --clrs-aqua: #7fdbff;
    --clrs-teal: #39cccc;
    --clrs-olive: #3d9970;
    --clrs-green: #2ecc40;
    --clrs-lime: #01ff70;
    --clrs-yellow: #ffdc00;
    --clrs-orange: #ff851b;
    --clrs-red: #ff4136;
    --clrs-maroon: #85144b;
    --clrs-fuchsia: #f012be;
    --clrs-purple: #b10dc9;
    --clrs-black: #111111;
    --clrs-gray: #aaaaaa;
    --clrs-silver: #dddddd;

    --clrs-bada55: #bada55;
    --clrs-slate: #708090;
    --clrs-slate4: #4e5964;
    --clrs-white: #ffffff;
  }

  main {
    margin: 1em;
    margin-bottom: 2em;
    color: var(--clrs-navy);
    font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
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

<main>
  <Eswat2 />
  <h1>Auto Dealers</h1>
  <Query />
  <Footer />
</main>
