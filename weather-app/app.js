const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if(!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}



//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)




// const url = 'http://api.weatherstack.com/current?access_key=57030d87241b5861e224f9dd4e87fc9c&query=19.0760,72.8777'

// request({url: url, json:true}, (error, response) => {
//     // console.log(response.body.current)
//     if (error){
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log(response.body.error.info)
//     } else {
//         console.log(response.body.current.weather_descriptions[0])
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out.' + ' There is a ' + response.body.current.precip + '% chance of rain.')
//     }
// })

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/mumbai.json?access_token=pk.eyJ1Ijoic21lZXR0IiwiYSI6ImNrY3M2ZjVzdzByMTUydG14Z3p3eG4zZ3YifQ.ETLWRO_9N0_nwdUvNQHLxg&limit=1'

// request({url: geocodeUrl, json:true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to mapbox')
//     } else if(response.body.features.length === 0) {
//         console.log('Invalid Location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

/*
request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

console.log('starting')


setTimeout(() => {
    console.log('2 second timer')
}, 2000)

setTimeout(() => {
    console.log('0 second Timer')
}, 0)

console.log('Last lap')
console.log('stopping')
*/