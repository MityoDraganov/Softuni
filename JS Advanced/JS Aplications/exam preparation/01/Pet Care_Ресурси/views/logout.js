

export async function logout(){
    const url = 'http://localhost:3030/users/logout'
    const token = sessionStorage.accessToken
    
    fetch(url, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    })
    sessionStorage.clear()
    
    location.href = '/'
}