import {html, render} from "../node_modules/lit-html/lit-html.js"
const navigationRoot = document.getElementsByTagName('header')[0]
export async function navigationRender(){
    const nav = html`
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

    <nav>
    <div>
        <a href="/dashboard">Dashboard</a>
    </div>

    ${sessionStorage.token !== undefined
    ? html`
    <div class="user">
        <a href="/addalbum">Add Album</a>
        <a href="/logout">Logout</a>
    </div>
    `
    : html`
        <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        </div>
        </nav>
    `
    }
    `
    render(nav, navigationRoot)
}