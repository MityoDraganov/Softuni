import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"


export async function catalogView(){
    navigationRender()
    const url = 'http://localhost:3030/data/albums?sortBy=_createdOn%20desc&distinct=name'

    const response = await fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },
    })
    const data = await response.json()
    

    const section = html`
    <section id="catalogPage">
            <h1>All Albums</h1>
            ${data.length !== 0 ? data.map(test)
            :
            html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>
            `
            }
    `
    render(section, root)
}
function test(element){
    const [_ownerId, name, artist, genre, imgUrl, price, releaseDate, description] = Object.values(element)
    const div = renderCard(_ownerId, name, artist, genre, imgUrl, price, releaseDate, description)
    return div
}
function renderCard(_ownerId, name, artist, genre, imgUrl, price, releaseDate, description){
    return html`
    <div class="card-box">
                <img src=${imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${name}</p>
                        <p class="artist">Artist: ${artist}</p>
                        <p class="genre">Genre: ${genre}}</p>
                        <p class="price">Price: $${price}</p>
                        <p class="date">Release Date: ${releaseDate}</p>
                    </div>
                    ${sessionStorage.accessToken !== undefined ?
                    html`
                    <div class="btn-group">
                        <a href="/details/${_ownerId}" id="details">Details</a>
                    </div>
                    `
                    :
                    html``
                    }

                </div>
            </div>
    `
}
/*
0
: 
artist
: 
"Pink Floyd"
description
: 
"The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd, released on 1 March 1973 by Harvest Records."
genre
: 
"Rock Music"
imgUrl
: 
"/images/pinkFloyd.jpg"
name
: 
"The Dark Side of the Moon"
price
: 
"28.75"
releaseDate
: 
"March 1, 1973"
_createdOn
: 
1617194295474
_id
: 
"126777f5-3277-42ad-b874-76d043b069cb"
_ownerId
: 
"847ec027-f659-4086-8032-5173e2f9c93a"
*/