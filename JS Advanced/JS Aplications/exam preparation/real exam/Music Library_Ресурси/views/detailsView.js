
import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"
let data


export async function detailsView(e){
    console.log('details')
    console.log(e)
    const id = e.params.id
    
    const url = `http://localhost:3030/data/albums/${id}`

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    console.log(response)
    if(response.ok !== true){
        return
    }
    data = await response.json()
    renderDetails(data)
}

function renderDetails(data){
    console.log(data)
    const ownerId = data._ownerId
    const cardId = data._id
    const currentId = sessionStorage.userId
    const section = html`
    <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${data.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${data.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">0</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
          ${ownerId !== currentId
          ? html `
            <a href="" id="like-btn" @click = ${likeClicked}>Like</a>
          `
          : html`
            <a href="/edit/${cardId}" id="edit-btn">Edit</a>
            <a href="/delete/${cardId}" id="delete-btn">Delete</a>
          `
        }

          </div>
        </div>
      </section>
    `
    render(section, root)
}

function likeClicked(e){
    e.preventDefault()
    e.target.style.display = 'none'
    
    const ownerId = data._ownerId
    const cardId = data._id
    const currentId = sessionStorage.userId
    const section = html`
    <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${data.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${data.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">1</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
          ${ownerId !== currentId
          ? html `
            
          `
          : html`
            <a href="/edit/${cardId}" id="edit-btn">Edit</a>
            <a href="/delete/${cardId}" id="delete-btn">Delete</a>
          `
        }

          </div>
        </div>
      </section>
    `
    render(section, root)

}