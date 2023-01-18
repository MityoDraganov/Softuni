

export async function logOut(){
    const url = 'http://localhost:3030/users/logout'
    const token = sessionStorage.token
    console.log(token)
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    })
    if(response.ok !== true){
        return
    }

    sessionStorage.clear()
    location.href = '/'
}