import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"

export async function homeView(){
    navigationRender()
    const section = html`
    <section id="home">
        <img src="./images/landing.png" alt="home" />

        <h2 id="landing-text"><span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right
            here!</span></h2>
      </section>
    `
    render(section, root)
}