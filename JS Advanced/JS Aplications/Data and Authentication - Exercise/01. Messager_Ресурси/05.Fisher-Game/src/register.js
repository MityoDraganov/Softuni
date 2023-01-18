
document.getElementById('register-form').addEventListener('submit', registerHandler)
document.querySelectorAll("a").forEach(x => x.classList.remove("active"))
document.getElementById("register").classList.add("active")
const notificationP = document.querySelector("p.notification")

function registerHandler(e){
    //do validation
    e.preventDefault()
   // debugger

    //console.log(form)
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    const email = data.email
    const password = data.password
    const rePassword = data.rePass

    if(password !== rePassword){
        notificationP.textContent = 'Error'
        setTimeout(()=>{
            notificationP.textContent = ''
        }, 1000)
    }
   onRegister(email, password)
}
async function onRegister(email, password){
    //do error handling
    const url = 'http://localhost:3030/users/register'

    const body = {
        "email": email,
        "password": password
    }
    const header = getHeader("POST", body)
    try{
    const response = await fetch(url, header)
    const data = await response.json()
    if(data.code !== 200){
        throw new Error(data.message)
    }
    return data
    }catch(e){
        notificationP.textContent = e
        setTimeout(()=>{
            notificationP.textContent = ''
        }, 1000)
        return
    }
}

function getHeader (method, body){
    return {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
}
