import { getUserData } from "./util.js"

const host = 'http://localhost:3030'

async function request(method, url, data){
    const options = {
        method,
        headers: {}
    }

    //If the function is called with data -> put the data in body
    //and set correct header
    if(data !== undefined){
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }


    const user = getUserData()
    /*
    chechs if there is a user in session Storage using getUserData from
    util.js
    */

    //if there is a user send the accessToken in headers
    if(user){
        options.headers['X-Authorization'] = user.accessToken
    }


    //catch network errors
    try{

    //send request to address and save result in response
    const response = await fetch(host + url, options)

    //checks if the response doesnt contain data
    //if it doesnt - it returns it
    if(response.status == 204){
        return response
    }
    if(response.status == 403){
        sessionStorage.clear()
    }

    const result = await response.json()

    // if response is an Error - throw the error
    if(response.ok == false){
        throw new Error(result.message)
    }
    

    //If we have passed to this point: result should contain correct data
    return result


    } catch(err){
        //catches network errors
        alert(err.message)
        return err
    }
}


export const get = request.bind(null, 'get')
export const post = request.bind(null, 'post')
export const put = request.bind(null, 'put')
export const del = request.bind(null, 'delete')