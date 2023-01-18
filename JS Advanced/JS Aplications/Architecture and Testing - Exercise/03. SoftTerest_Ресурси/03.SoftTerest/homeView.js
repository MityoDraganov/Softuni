import { hidePages } from "./app.js"

export function homeView(){
    hidePages()
    document.getElementById("homePage-view").style.display = 'block'
}