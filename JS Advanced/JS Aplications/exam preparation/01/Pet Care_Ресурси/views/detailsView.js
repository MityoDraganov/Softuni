import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"

export async function detailsView(e){
if(e.hasOwnProperty('params')){

const str = e.params.id
const id = str.slice(1)
const url = `http://localhost:3030/data/pets/${id}`

const response = await fetch(url,{
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'
    }
})
const data = await response.json()
renderCard(data)
}
}

function renderCard(data){
    console.log(data)
    const section = html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${data.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>${data.name}</h1>
                        <h3>Breed: ${data.breed}</h3>
                        <h4>Age: ${data.age}</h4>
                        <h4>Weight: ${data.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${sessionStorage._id != data._ownerId ? html``
                    : html`
                    <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                        <a href="#" class="edit">Edit</a>
                        <a href="/delete/${data._id}" class="remove">Delete</a>
                        <!--(Bonus Part) Only for no creator and user-->
                    </div>
                    `}
                </div>
            </div>
        </section>
    `
    render(section, root)
}
/*
{_ownerId: '847ec027-f659-4086-8032-5173e2f9c93a', name: 'Chibi', breed: 'Teddy guinea pig', age: '1 years', weight: '1kg', …}
age
: 
"1 years"
breed
: 
"Teddy guinea pig"
image
: 
"../images/guinea-pig.jpg"
name
: 
"Chibi"
weight
: 
"1kg"
_createdOn
: 
1617194295480
_id
: 
"136777f5-3277-42ad-b874-76d043b069cb"
_ownerId
: 
"847ec027-f659-4086-8032-5173e2f9c93a"
*/