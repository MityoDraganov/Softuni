import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"


export async function registerView(){
    navigationRender()
    const section = html`
        <section id="registerPage">
            <form>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register" @click = ${onClick}>Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    `
    render(section, root)
}

function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    //console.log(Object.values(form))
    const [useless, email, password, rePassword] = Object.values(form)
    if(!email.value || !password.value || !rePassword.value){
        window.alert('Empty spaces')
        return
    }
    if(password.value !== rePassword.value){
        window.alert('Passwords do not match')
        return
    }
    requester(email.value,password.value)
    
}

async function requester(email, password){
    const url = 'http://localhost:3030/users/register'
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