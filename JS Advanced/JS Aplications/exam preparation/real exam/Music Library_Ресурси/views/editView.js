import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { navigationRender } from "./navigation.js"
let id

export async function editView(e){
    id = e.params.id
    getRequester(id)
}

function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    const [singer, album, imageUrl, release, label, sales] = Object.values(form)
    requester(singer.value, album.value, imageUrl.value, release.value, label.value, sales.value)
}

async function requester(singer, album, imageUrl, release, label, sales){
    if(!singer || !album || !imageUrl || !release || !label || !sales){
        return
    }
    const url = `http://localhost:3030/${id}`
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
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(body)
    })
    console.log(response)
    if(response.ok !== true){
        return
    }
    location.href = `/details/${id}`
}

async function getRequester(id){
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
    const data = await response.json()
    template(data)
}
function template(data){
    console.log('data:')
    console.log(data)
    const section = html`
    <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value = ${data.artist} />
            <input type="text" name="album" id="album-album" placeholder="Album"  />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value = ${data.imgUrl}/>
            <input type="text" name="release" id="album-release" placeholder="Release date" value = ${data.release}/>
            <input type="text" name="label" id="album-label" placeholder="Label"/>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit" @click = ${onClick}>post</button>
          </form>
        </div>
      </section>
    `
    render(section, root)
}
