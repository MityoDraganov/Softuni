import { post, get } from "./api.js";
import { clearUserData, setUserData } from "./util.js";


/*
    The function recieves email, password that we get from the FORM in the page
    and sends a request to the server with them

    After that we desctruct the response data into: _id, email(that we rename to resultEmail) and accessToken


    Using setUserData function from util.js we set the information into a Object into the sessionStorage
*/
export async function login(email, password){
    const {_id, email: resultEmail, accessToken} = await post('/users/login', {email, password})

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    })
}

export async function register(email, password){
    const {_id, email: resultEmail, accessToken} = await post('/users/register', {email, password})
    setUserData({
        _id,
        email: resultEmail,
        accessToken
    })
}

export async function logout(){
    get('/users/logout')
    clearUserData()
}
