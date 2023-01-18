import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"

export async function loginView(){
    navigationRender()
    const section = html`
        <section id="loginPage">
            <form>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login" @click = ${onClick}>Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    `
    render(section, root)
}

function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName("form")[0]
    const [useless, email, password] = Object.values(form)
    if(!email.value || !password.value){
        return
    }
    requester(email.value, password.value)

}

async function requester(email, password){
    const url = 'http://localhost:3030/users/login'
    const body = {
        email,
        password
    }
    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    console.log(request)
    if(request.ok !== true){
        window.alert('Invalid user data')
        return
    }

    const data = await request.json()
    sessionStorage.setItem('accessToken', data.accessToken)
    sessionStorage.setItem('userId', data._id)
    location.href = "/"
}

/*
{email: 'peter@abv.bg', _id: '35c62d76-8152-4626-8712-eeb96381bea8', accessToken: '3e31ad5ccceaa1d5b94552b3a54b8aae7c59ed9e19f6fbbc412fe89258b2dc2d'}
accessToken
: 
"3e31ad5ccceaa1d5b94552b3a54b8aae7c59ed9e19f6fbbc412fe89258b2dc2d"
email
: 
"peter@abv.bg"
_id
: 
"35c62d76-8152-4626-8712-eeb96381bea8"
*/