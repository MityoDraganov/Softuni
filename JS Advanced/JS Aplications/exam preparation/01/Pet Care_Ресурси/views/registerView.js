import { root } from "../app.js";
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationView } from "./navigationView.js";

export async function registerView(){
    navigationView()

    const section = html`
        <section id="registerPage">
            <form class="registerForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit" @click="${onClick}">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>
    `

    render(section, root)
}


function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    const [email, password, rePassword] = Object.values(form)
    if(!email.value || !password.value || !rePassword.value){
        window.alert('There are empty spaces')
        return
    }
    if(password.value !== rePassword.value){
        window.alert('Passwords do not match')
        return
    }
    request(email.value, password.value, rePassword.value)
}

async function request(email, password, rePassword){
    const url = 'http://localhost:3030/users/register'
    const body = {
        'email': email,
        'password': password
    }
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    console.log(response)
    if(response.ok !== true){
        window.alert(response.status)
        return
    }

    const data = await response.json()
    const accessToken = data.accessToken
    const _id = data._id
    sessionStorage.setItem('accessToken', accessToken)
    sessionStorage.setItem('_id', _id)
    navigationView()
    location.href = '/'
}

/*
{email: 'mityovdraganov@gmail.com', password: '1234', _createdOn: 1669547340111, _id: 'db6509a8-86d6-4ca8-a8bd-846326054fe6', accessToken: '5c7501c67691ba20d3511913bdeefabb47c0eb63b4130dc1c79f82ff8ada4c8e'}
accessToken
: 
"5c7501c67691ba20d3511913bdeefabb47c0eb63b4130dc1c79f82ff8ada4c8e"
email
: 
"mityovdraganov@gmail.com"
password
: 
"1234"
_createdOn
: 
1669547340111
_id
: 
"db6509a8-86d6-4ca8-a8bd-846326054fe6"
*/