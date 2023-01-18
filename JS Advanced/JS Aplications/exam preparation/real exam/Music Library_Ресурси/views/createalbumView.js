import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"


export async function createAlbumView(){
    navigationRender()
    const section = html`
    <section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit" @click = ${onClick}>post</button>
          </form>
        </div>
      </section>

    `

    render(section, root)
}

function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    const [singer, album, imageUrl, release, label, sales] = Object.values(form)
    console.log(form)
    requester(singer.value, album.value, imageUrl.value, release.value, label.value, sales.value)
console.log('works');
}

async function requester(singer, album, imageUrl, release, label, sales){
    if(!singer || !album || !imageUrl || ! release || !label || !sales){
        
        return
    }
    const url = 'http://localhost:3030/data/albums'
    const body = {
        singer,
        album,
        imageUrl,
        release,
        label,
        sales
    }
    const token = sessionStorage.token
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(body)
    })
    if(response.ok !== true){
        return
    }
    location.href = "/dashboard"
}