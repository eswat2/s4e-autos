import PullToRefresh from "pulltorefreshjs"
import App from "./App.svelte"

PullToRefresh.init({
  mainElement: "body",
  onRefresh() {
    window.location.reload()
  },
})

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
})

export default app
