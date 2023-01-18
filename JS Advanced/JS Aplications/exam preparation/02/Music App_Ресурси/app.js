import page from "./node_modules/page/page.mjs"
import { catalogView } from "./views/catalogView.js"
import { homeView } from "./views/homeView.js"
import { loginView } from "./views/loginView.js"
import { logOut } from "./views/logout.js"
import { registerView } from "./views/registerView.js"

export const root = document.getElementById("main-content")

page("/", homeView)
page("/catalog", catalogView)
page("/details/:id")
page("/login", loginView)
page('/logout', logOut)
page('/register', registerView)
page("/*", homeView)
page.start()