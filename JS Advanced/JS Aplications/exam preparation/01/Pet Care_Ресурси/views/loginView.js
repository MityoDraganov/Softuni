
import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationView } from "./navigationView.js"
//import { homeView } from "./homeView"
export async function loginView(){
    const section = html`
        <section id="loginPage">
            <form class="loginForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit" @click="${onClick}">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
    `
    render(section, root)
}

function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    const [email, password] = Object.values(form)
    if(!email.value || !password.value){
        return
    }

    request(email.value, password.value)
    console.log(email, password)
    console.log('clicked');
}

async function request(email, password){
    const url = 'http://localhost:3030/users/login'
    const body = {
        "email": email, "password": password 
    }

    const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
                })

    console.log(response)
    if(response.ok !== true){
        return
    }
    const data = await response.json()
    console.log(data)
    const accessToken = data.accessToken
    const _id = data._id
    sessionStorage.setItem('accessToken', accessToken)
    sessionStorage.setItem('_id', _id)
    navigationView()
    location.href = '/'
}

/*
{email: 'peter@abv.bg', _id: '35c62d76-8152-4626-8712-eeb96381bea8', accessToken: '0393df239a6366a69c682ff09b34388f54f505a9096996a479f6490b973f0b5f'}
accessToken
: 
"0393df239a6366a69c682ff09b34388f54f505a9096996a479f6490b973f0b5f"
email
: 
"peter@abv.bg"
_id
: 
"35c62d76-8152-4626-8712-eeb96381bea8"
*/