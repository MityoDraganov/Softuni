import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"

export async function dashboardView(){
    navigationRender()

    const url = 'http://localhost:3030/data/albums?sortBy=_createdOn%20desc'

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(response)
    if(response.ok !== true){
        return
    }
    const data =  await response.json()

    const section = html`
    <section id="dashboard">
        <h2>Albums</h2>
        ${data.length !== 0 ? data.map(renderCard)
            :
            html`
                <div>
                    <h2>There are no albums added yet.</h2>
                </div>
            `
            }
    `

    render(section, root)

}

function renderCard(element){
    const album = element.album
    const singer = element.singer
    const sales = element.sales
    const imageUrl = element.imageUrl
    const id = element._id
   return html`
   <li class="card">
            <img src= ${imageUrl} alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${sales}</span></p>
            <a class="details-btn" href="/details/${id}">Details</a>
          </li>
   `
}
