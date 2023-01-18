import {html, render} from './node_modules/lit-html/lit-html.js'
import { towns } from './towns.js'
const button = document.querySelector('button')
button.addEventListener('click', search)

const townsRoot = document.getElementById('towns')
const resultRoot = document.getElementById('result')
update()

function searchTemplate(townsName){
   const ul = html`
   <ul>
      ${townsName.map(townsName => displayEachTown(townsName))}
   </ul>
`
   return ul
}

function displayEachTown(town){
return html`
<li>${town}</li>
`
}

function update(){
   const ul = searchTemplate(towns)
   render(ul, townsRoot)
}






function search(e) {
   const input = document.getElementById('searchText')
   const inputValue = input.value
   const towns = e.target.parentElement.children[0].children[0].children
   for(let town of towns){
      if(town.classList.contains('active')){
         town.classList.remove('active')
      }
      }
   let counter = 0
   for(let town of towns){
      const townTextContent = town.textContent
      if(townTextContent.includes(inputValue)){
         counter++
         console.log(town)
         town.classList.add('active')
        // console.log(townTextContent)
      }
      const result = createResult(counter)
      render(result, resultRoot)
   }
}

function createResult(counter){
   return html`
   ${counter} matches found
   `
}