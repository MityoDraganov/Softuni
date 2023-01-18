import { root } from "../app.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"
import { detailsView } from "./detailsView.js"

const url = 'http://localhost:3030/data/pets?sortBy=_createdOn%20desc&distinct=name'
export async function dashboardView(){
    const response = await request()
    if(response.ok !== true){
        return
    }
    console.log(response)
    const data = await response.json()
    //console.log(data)
    function catalogTemplate(pets){
        const div = html`
            <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${pets.length == 0 ? html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>
                ` : pets.map(createCard)}
            </div>
            </section>
    `
    render(div, root)
    }
    catalogTemplate(data)
    /*
    for(let animal of data){
        console.log(animal)
        const [_ownerId, name, breed, age, weight, image, _createdOn, _id] = Object.values(animal)
        createCard(_ownerId, name, breed, age, weight, image, _createdOn, _id)
    }
    */
}

function request(){
    return fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

function createCard(pet){
    console.log(pet)
    const [_ownerId, name, breed, age, weight, image, _createdOn, _id] = Object.values(pet)
    return html`
        <div class="animals-dashboard">
                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src=${image}>
                    </article>
                    <h2 class="name">${name}</h2>
                    <h3 class="breed">${breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/:${_id}">Details</a>
                    </div>
                </div>
    `
}

/*
age: "2 years"
breed: "Shiba Inu"
image: "../images/Shiba-Inu.png"
name: "Max"
weight: "5kg"
_createdOn: 1617194128618
_id: "ff436770-76c5-40e2-b231-77409eda7a61"
_ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"
*/