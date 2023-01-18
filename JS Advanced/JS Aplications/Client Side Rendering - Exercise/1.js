import {html, render} from './node_modules/lit-html/lit-html.js'
import {cats} from './catSeeder.js'

const root = document.getElementById('allCats')

const catTemplate = html`
    <ul>
        ${cats.map(cat => createCatCard(cat))}
    </ul>
`
render(catTemplate, root)
function createCatCard(cat){
    return html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click = ${onClick}>Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
    `
}

function onClick(e){

        const displayDiv = e.target.parentElement.children[1]
        console.log(displayDiv)
        if(displayDiv.style.display == 'none'){
            target.textContent = 'Hide status code'
            displayDiv.style.display = 'block'
        } else{
            target.textContent = 
            displayDiv.style.display = 'none'
        }
}