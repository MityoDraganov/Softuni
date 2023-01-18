import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"


export async function registerView(){
    navigationRender()
    const section = html`
    <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit" @click = ${onClick}>register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
    `
    render(section, root)
}

async function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    const [email, password, rePassword] = Object.values(form)
    if(!email.value || !password.value || !rePassword.value){
        window.alert('empty fields')
        return
    }
    if(password.value != rePassword.value){
        window.alert('password dont match')
        return
    }
    requester(email.value, password.value)
}

async function requester(email, password){
    const url = 'http://localhost:3030/users/register'
    const body = {
        email,
        password
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
        window.alert('Error')
        return
    }
    const data = await response.json()
    const token = data.accessToken
    const userId = data._id
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('userId', userId)
    location.href = '/'
}