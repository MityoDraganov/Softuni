import {html, render} from "../node_modules/lit-html/lit-html.js"
const rootNav = document.getElementsByTagName('header')[0]
export async function navigationView(){
    if(sessionStorage.accessToken !== undefined){
        const nav = html`
            <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <!--Only Users-->
                <li><a href="createcard">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
            </nav>
        `

        render(nav, rootNav)
    }else{
        const nav = html`
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <!--Only Guest-->
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </nav>
        `

        render(nav, rootNav)
    }
}