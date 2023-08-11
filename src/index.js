import { createRoot } from "react-dom/client";
import { App } from "./components/App/index.js";
import { createBrowserRouter } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";

const app = document.querySelector("#app")
console.log(app)

const root = createRoot(app)




root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

