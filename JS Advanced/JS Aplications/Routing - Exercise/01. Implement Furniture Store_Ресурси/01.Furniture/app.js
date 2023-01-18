import { catalogView } from "./catalogView.js"
import { furnitureView } from "./furnitureView.js"
import page from "./node_modules/page/page.mjs"
let root = document.getElementsByClassName('container')[0]
export {root}



page("/furnitures", furnitureView)
page("/", catalogView)
page("/*", catalogView)
page.start()