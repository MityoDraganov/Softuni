import {html, render} from "../node_modules/lit-html/lit-html.js"
const navigationRoot = document.getElementsByTagName('nav')[0]

export async function navigationRender(){
    const nav = html`
        <img src="./images/headphones.png">
                <a href="/">Home</a>
                <ul>
                    <!--All user-->
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/">Search</a></li>
                    <!--Only guest-->
                    ${sessionStorage.accessToken === undefined
                    ? html`
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    `
                    : html`
                            <li><a href="/create">Create Album</a></li>
                            <li><a href="/logout">Logout</a></li>
                    `
                    }
                </ul>
    `
    render(nav, navigationRoot)
}