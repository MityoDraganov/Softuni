import {html, render} from './node_modules/lit-html/lit-html.js'
const root = document.getElementById('menu')
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
loadFromREST()
document.querySelector('form')
.addEventListener('submit', onSubmit)

//3333333333333
function onSubmit(e){
    e.preventDefault()
    const textInput = document.getElementById('itemText').value
    addItem(textInput)
}

//444444444444
async function addItem(text) {
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'Application/json'
        },
        body:JSON.stringify({
            text: text
        })
    })
    if(response.ok == true){
        loadFromREST()
    }
}

//11111111111
async function loadFromREST(){
    

    //REQUESTS
    const response = await fetch(url)
    const data = await response.json()
    const result = Object.values(data).map(x => createOptionTemplate(x))
    console.log(result)
    render(result, root)
}

//222222222222
function createOptionTemplate(option){
    return html`    
        <option value=${option._id}>${option.text}</option>
    `
}
//{text: 'Munich', _id: '8f414b4f-ab39-4d36-bedb-2ad69da9c830'}
//VALUE IN VALUE