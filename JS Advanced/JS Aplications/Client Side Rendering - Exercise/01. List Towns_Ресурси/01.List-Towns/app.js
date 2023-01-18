import {html, render} from './node_modules/lit-html/lit-html.js'
document.getElementById('btnLoadTowns')
.addEventListener('click', loadClicked)
const root = document.getElementById('root')
export function loadClicked(e){
    e.preventDefault()
    const inputValue = document.getElementById('towns').value 
    const inputArr = inputValue.split(', ')
    const myUl = document.createElement('ul')
    for(let el of inputArr){
        const li = document.createElement('li')
        li.textContent = el
        myUl.appendChild(li)
    }
    render(myUl, root)
}