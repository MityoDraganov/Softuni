export  function logOut(){
    console.log('logout');
    
    onLogout()
}

async function onLogout(){
    const token = localStorage.getItem('authToken')
    const logOutUrl = 'http://localhost:3030/users/logout'
    console.log(token)
    if(token == null){
        return
    }
    else{
    try{
    const response = await fetch(logOutUrl, {
        method: 'get',
        headers: {
            'X-Authorization' : token
        }
    })
    if(response.status !== 403)
    {
        document.getElementsByName('guest').forEach(s => s.style.display = 'block')
        document.getElementsByName('user').forEach(s => s.style.display = 'none')
        sessionStorage.clear()
        localStorage.clear()
    return response
    }
} catch{
    //const data = await response.json()
    //console.log(data)
}
    }
}
