import { navigationRender } from "./navigation.js"



export async function logOut(){
    navigationRender()
    const url = 'http://localhost:3030/users/logout'

    const request = await fetch(url,{
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.accessToken
        },
    })
    if(request.ok !== true){
        return
    }
    sessionStorage.clear()
    location.href = "/"
}