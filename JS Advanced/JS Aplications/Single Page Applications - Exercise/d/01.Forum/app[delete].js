

import { getTopics } from "./displayTopics.js"
import { checkSubmitter} from "./form.js"

const form = document.querySelector('form')
form.addEventListener('submit', checkSubmitter)

window.api = {
    getTopics
}