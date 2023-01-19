/*
const string = 'http://localhost:5000/cats/add-breed?breed=kane+korke#'

const test = '123'
const regex = /\/cats\/add-breed\?breed=(?<breed>[A-z]*\+*[A-z]*)/gm

const match = regex.exec(string)
console.log(match.groups)
*/

const fs = require('fs')
const file = fs.readFileSync('./data/breeds.txt', 'utf-8')
console.log(file)