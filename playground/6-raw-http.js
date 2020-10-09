const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=57030d87241b5861e224f9dd4e87fc9c&query=19.0760,72.8777'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()