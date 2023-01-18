import { hidePages } from "./app.js";

export function dashboard(){
    console.log('dashboard');
    hidePages()
    document.getElementById("dashboardPage-view").style.display = 'block'
}