
import { hidePages } from "./app.js";
import { homeView } from "./homeView.js";
import { register } from "./register.js";

export function login(){
    console.log('login');
    hidePages()
    document.getElementById("loginPage-view").style.display = 'block'

   document.addEventListener('click', checkClicked)
}

function loginFormSubmited(){
    console.log('submit')

    const form = document.getElementById('loginForm')
    const formData = form.getElementsByTagName('input')
    console.log(` data : ${formData}`)
    const email = formData[0].value
    const password = formData[1].value
    
    sendLogin(email, password, formData)
}

async function sendLogin(email, password, data){
    const loginUrl = 'http://localhost:3030/users/login'
    const body = {
        email,
        password
    }

    const response = await fetch(loginUrl, {
        method: 'post',
        body: JSON.stringify(body)
    })
    if(response.status == 200){
        
        data[0].value = ''
        data[1].value = ''
        const responseData = await response.json()
        console.log(responseData)
        const token = responseData.accessToken
        sessionStorage.setItem('user',JSON.stringify(responseData))
        localStorage.setItem('authToken', token)
        document.getElementsByName('guest').forEach(s => s.style.display = 'none')
        document.getElementsByName('user').forEach(s => s.style.display = 'block')
        homeView()
    } else{
        data[0].value = ''
        data[1].value = ''
        return
    }
}

function checkClicked(e){
    e.preventDefault()
    //console.log(e)
    if(e.target.tagName == 'BUTTON'){
        
        //console.log(e.target.parentNode.parentNode.parentNode.id)
        //const id = e.target.parentNode.parentNode.parentNode.id

       loginFormSubmited()
    } else if(e.target.text == 'Sign-Up'){
        register()
    }
}