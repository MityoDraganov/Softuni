const http = require('http')
const fs = require('fs')
const eventBus = require('./eventBus.js')
const css = require('./views/siteCss')
 const catsData = require('./cats.json')
//const homePageView = require('./views/homeView.js')
const favIco = fs.readFileSync('./views/images/pawprint.ico')
/*
function test(){
const data = fs.readFileSync('./views/site.css', 'utf8')
return data
}
*/
const addBreedRegex = /\/cats\/add-breed\?breed=(?<breed>[A-z]*\+*[A-z]*)/gm
const editCatRegex = /\/cats\/edit-cat\?id\=(?<id>\d*)/gm

const server = http.createServer((req, res) =>{
    const reqUrl = req.url
    console.log('url: ' + reqUrl)
    res.writeHead(200, {
        'Content-Type': 'text/html'
        })
    

    let data
    switch(reqUrl){
        //default needs
        case '/':
            data = eventBus.publish('homeView')

            res.write(data)
            break;

        case '/content/styles/site.css':

            res.writeHead(200, {
                'Content-Type': 'text/css'
            })

            res.write(css)
            break;

        case '/content/images/pawprint.ico':
            res.writeHead(200, {
                'Content-Type': 'image/x-icon'
            })
            res.write(favIco)
            break;
        
        //other views
        case '/cats/add-cat':
            const options = fs.readFileSync('./breeds.txt', 'utf-8')
             data = eventBus.publish('addCatView', [options])

            res.write(data)
            break;
        
        case '/cats/add-breed':
             data = eventBus.publish('addBreedView')

            res.write(data)
            break;
        }
        const matchBreed = addBreedRegex.exec(reqUrl)
        if(matchBreed !== null){

            console.log(`match: ${matchBreed}`)

            const breedGroup = matchBreed.groups
            const breed = breedGroup.breed
            const toApend = breed.split('+').join(' ')

            fs.appendFile('./breeds.txt', `${toApend} \n`, (err) =>{
                if(err != null){
                    console.log(err)
                }
            })
            console.log(`breed: ${breed}`)
        }
        const matchEditCat = editCatRegex.exec(reqUrl)
        if(matchEditCat !== null){

            //console.log(`match editCat: ${matchEditCat}`)

            const editGroups = matchEditCat.groups
            const id = editGroups.id


            const currentCat = catsData[id-1]

            data = eventBus.publish('editCatView', currentCat)
            res.write(data)
        }
        //const 
    //res.write('Hi!')
    res.end()
})
server.listen(5000)

console.log('Server is listening on port 5000...')