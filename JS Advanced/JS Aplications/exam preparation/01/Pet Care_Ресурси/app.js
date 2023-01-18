import page from "./node_modules/page/page.mjs"
import { createCard } from "./views/createCard.js"
import { dashboardView } from "./views/dashboardView.js"
import { deleteView } from "./views/delete.js"
import { detailsView } from "./views/detailsView.js"
import { homeView } from "./views/homeView.js"
import { loginView } from "./views/loginView.js"
import { logout } from "./views/logout.js"
import { navigationView } from "./views/navigationView.js"
import { registerView } from "./views/registerView.js"


navigationView()
const root = document.getElementById('content')
export {root}

page('/dashboard', dashboardView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logout)
page('/details/:id', detailsView)
page('/createcard', createCard)
page('/delete/:id', deleteView)
page('/', homeView)
page('/*', homeView)

page.start()