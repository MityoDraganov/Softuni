import { createAlbumView } from "./views/createalbumView.js"
import page from "./node_modules/page/page.mjs"
import { dashboardView } from "./views/dashboardView.js"
import { detailsView } from "./views/detailsView.js"
import { homeView } from "./views/homeView.js"
import { loginView } from "./views/loginView.js"
import { logOut } from "./views/logout.js"
import { navigationRender } from "./views/navigation.js"
import { registerView } from "./views/registerView.js"
import { editView } from "./views/editView.js"
import { deleteView } from "./views/deleteView.js"

export const root = document.getElementsByTagName('main')[0]


navigationRender()


page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logOut)
page('/dashboard', dashboardView)
page('/addalbum', createAlbumView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/delete/:id', deleteView)
page('/', homeView)
page.start()