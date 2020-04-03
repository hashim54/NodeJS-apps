const path = require ('path')
const express = require ('express')
const hbs = require ('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))
const app = express()
//Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

//upon receiving a request, the express server will find the matching orute and respond accordingly
//HTML used to setup the static web content. All methods are explained at npm express webpage
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Application',
        name: 'Moe Hashim',
        copyright: ' 2020 Copy Rights Reserved'
    })
}
)
//SETTING THE ROUTE HANDLERS
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT ME',
        name: 'Moe Hashim',
        copyright: ' 2020 Copy Rights Reserved'
    })
}
)
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP',
        name: 'Moe Hashim',
        helpText: 'This is some helpful text',
        copyright: ' 2020 Copy Rights Reserved'
    })
}
)
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address location'
        })
    }
    geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
        if(error) {
            return res.send({error})
        }
    forecast(longitude, latitude, (error, forecastData) => {
        if(error) {
            return res.send({error})
           }
        res.send({
            Forecast: forecastData,
            location,
            address: req.query.address
            })
        } )
    })
    })

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: ' ',
    })
})

app.get('/help/*', (req, res) => 
{
    res.render('404', {
        title: '404 Help ', 
        name: 'Moe Hashim',
        errorMessage: 'Help Article not found.'
    })
})

app.get('*', (req, res) => 
{
    res.render('404', {
        title: '404', 
        name: 'Moe Hashim',
        errorMessage: 'Page not found.'
    })
})
//port 3000 is a common development port
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

//app.com
//app.com/about
//app.com/help