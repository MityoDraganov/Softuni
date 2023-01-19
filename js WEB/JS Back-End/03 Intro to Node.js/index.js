const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    response.write('<center><h1>Hi!<h1><center>')

    response.end()
})

server.listen(5000)
console.log('Server is running on port 5000. Do not close...')