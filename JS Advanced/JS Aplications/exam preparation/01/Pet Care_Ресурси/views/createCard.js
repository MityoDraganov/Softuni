import { render, html } from "../node_modules/lit-html/lit-html.js"
import { root } from "../app.js"


export function createCard(){
    const section = html`
        <section id="createPage">
            <form class="createForm">
                <img src="./images/cat-create.jpg">
                <div>
                    <h2>Create PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" placeholder="Max">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" placeholder="2 years">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" placeholder="5kg">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                    </div>
                    <button class="btn" type="submit" @click="${onClick}">Create Pet</button>
                </div>
            </form>
        </section>
    `

    render(section, root)
}

function onClick(e){
    e.preventDefault()
    const form = document.getElementsByTagName('form')[0]
    const [name, breed, age, weight, image] = Object.values(form)
    if(!name.value || !breed.value || !age.value || !weight.value || !image.value){
        return
    }
    request(name.value, breed.value, age.value, weight.value, image.value)
}
async function request(name, breed, age, weight, image){
    const url = 'http://localhost:3030/data/pets'
    const body = {
        name,
        breed,
        age,
        weight,
        image
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.accessToken
        },
        body: JSON.stringify(body)
    })
    if(response.ok != true){
        return
    }
    location.href = '/'
}