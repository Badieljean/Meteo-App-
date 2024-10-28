import { Root } from "./constants";
import App from "./App"

const createRoot = new Root(document.getElementById('root'))

createRoot.render(App)