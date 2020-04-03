const https = require ('https')

const url ='https://api.darksky.net/forecast/5cd74e21e0c16fb31434678d33c75e0b/34,-71?units=us&lang=en'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

    response.on('error', (error) => {
        console.log('Error: ' + error)
    })
})

request.end()

