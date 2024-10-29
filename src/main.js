import { Root } from "./constants";
import App from "./App"

import './services/apiServices'

const createRoot = new Root(document.getElementById('root'))

createRoot.render(App)