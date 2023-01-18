import {render, page} from '../lib.js'
import { showHome } from '../views/homeView.js'

//ROOT
const main = document.getElementById('content')



//This calls the decorateContext function before each function
page(decorateContext)


page('/', decorateContext ,showHome)
page('/dashboard', () => console.log('dashboard'))
page('/dashboard/:id', () => console.log('details'))
page('/edit/:id', () => console.log('home'))
page('/createPostcard', () => console.log('create'))
page('/login', () => console.log('login'))
page('/register', () => console.log('register'))
page('/*', showHome)

page.start()


//MIDLE Wire
function decorateContext(ctx, next){
    ctx.render = renderMain

    next()
}


function renderMain(content){
    render(content, main)
}

