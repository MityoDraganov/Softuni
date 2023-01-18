import { create } from "./create.js"
import { dashboard } from "./dashboard.js"
import { homeView } from "./homeView.js"
import { login } from "./login.js"
import { logOut } from "./logout.js"
import { register } from "./register.js"


export function hidePages(){
document.querySelectorAll('section').forEach(s => s.style.display = 'none')
}
hidePages()

document.getElementById("homePage-view").style.display = 'block'
document.getElementsByName('guest').forEach(s => s.style.display = 'block')
    document.getElementsByName('user').forEach(s => s.style.display = 'none')



//Pages navigator
const views = {
    'homePage-view': homeView,

}
document.addEventListener('click', checkClicked)
function checkClicked(e){
    e.preventDefault()
    if(e.target.tagName == 'A'){
        
        //console.log(e.target.parentNode.parentNode.parentNode.id)
        const id = e.target.parentNode.parentNode.parentNode.id
        if(id in views){
            const view = views[id]
            view()
        }
    }
}

const navBtnFuncs = {
    'Dashboard': dashboard,
    'Create': create,
    'Logout': logOut,
    'Login': login,
    'Register': register
}
let btns = document.getElementById('navBar-buttons').children
console.log(btns);
Object.values(btns).forEach(btn => btn.addEventListener('click', navButtonClicked))

function navButtonClicked(e){
    const textContent = e.target.textContent
    if(textContent in navBtnFuncs){
        const fileToRun = navBtnFuncs[textContent]
        fileToRun()
    }
}
const MyDocument = document
export{MyDocument}