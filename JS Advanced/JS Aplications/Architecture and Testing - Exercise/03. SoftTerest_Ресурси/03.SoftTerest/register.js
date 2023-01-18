import { hidePages } from "./app.js";
import { homeView } from "./homeView.js";



export async function register(){
    //console.log(document)
    console.log('register');
    hidePages()
    document.getElementById("registerPage-view").style.display = 'block'

    const submitBtn = document.getElementById('registerSubmit')
    submitBtn.addEventListener('click', formSubmited)

}
async function formSubmited(){
    console.log('pressed')

    const form = document.getElementById('registerForm')
    const data = form.getElementsByTagName('input')
    const email = data[0].value
    const password = data[1].value
    const rePassword = data[2].value
    
    if(email.length < 3){
        return
    } else if(password.length < 3){
        return
    } else if(rePassword !== password){
        return
    }

    const body = {
        email,
        password
    }

    const response = await fetch('http://localhost:3030/users/register',{
        method: 'post',
        body: JSON.stringify(body)
    })
    console.log(response)
    const responseData = await response.json()
    if(response.ok == true){
    console.log(responseData)
    const token = responseData.accessToken
    sessionStorage.setItem('user',JSON.stringify(responseData))
    localStorage.setItem('authToken', token)
    data[0].value = ''
    data[1].value = ''
    data[2].value = ''
    document.getElementsByName('guest').forEach(s => s.style.display = 'none')
    document.getElementsByName('user').forEach(s => s.style.display = 'block')
    homeView()
    } else{
        console.log(responseData)
        return
    }
}

//{"email":"mityovdraganov@gmail.com","password":"12345","_createdOn":1668102407605,"_id":"adc9c69e-55a3-4c28-8e5b-1d17dc71dd07","accessToken":"caa84cc8827db58cb1a5502277ea183db811f0541e0f55dee08e87994181f524"}