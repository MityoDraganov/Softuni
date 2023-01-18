import { root } from "./app.js"
import { html, render } from "./node_modules/lit-html/lit-html.js"

export async function furnitureView(){
    console.log('works')
    let p = html`<h3>furnitures View</h3>`
    render(p, root)
}