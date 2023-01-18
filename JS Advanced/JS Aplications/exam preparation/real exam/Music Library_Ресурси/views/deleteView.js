import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"


export async function deleteView(e){
    const text = 'Delete?'
    if(confirm(text) != true){
        return
    }
    const token = sessionStorage.token
    console.log('token: ' + token)
    const id = e.params.id
    const url = `http://localhost:3030/data/albums/${id}`

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    })
    location.href = '/dashboard'
}