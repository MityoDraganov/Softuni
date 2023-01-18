import {getTopics } from "./display.js";
import { checkSubmitter } from "./form.js";
getTopics()
const form = document.querySelector('form')
form.addEventListener('submit', checkSubmitter)
