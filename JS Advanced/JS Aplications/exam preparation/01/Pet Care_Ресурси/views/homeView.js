console.log('home');

import { root } from "../app.js";
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationView } from "./navigationView.js";

export async function homeView(){
    const section = html`
        <section class="welcome-content">
            <article class="welcome-content-text">
                <h1>We Care</h1>
                <h1 class="bold-welcome">Your Pets</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </article>
            <article class="welcome-content-image">
                <img src="./images/header-dog.png" alt="dog">
            </article>
        </section>
    `
    render(section, root)
    navigationView()
}