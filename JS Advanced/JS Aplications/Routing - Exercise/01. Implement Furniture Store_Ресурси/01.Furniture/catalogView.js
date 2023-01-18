import { root } from "./app.js"
import { html, render } from "./node_modules/lit-html/lit-html.js"


export async function catalogView(e){
    let p = html`<h3>Catalog View</h3>`
    render(p, root)
}