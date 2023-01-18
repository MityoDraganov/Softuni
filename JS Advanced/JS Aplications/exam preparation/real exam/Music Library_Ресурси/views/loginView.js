import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"


export async function loginView(){
    navigationRender()

    const section = html`
    <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit" @click = ${onClick}>login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>
    `
    render(section, root)
}

async function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    const [email, password] = Object.values(form)
    if(!email.value || !password.value){
        return
    }
    requester(email.value, password.value)
    console.log('pressed');
}

async function requester(email, password){
    const url = 'http://localhost:3030/users/login'
    console.log(email, password)
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