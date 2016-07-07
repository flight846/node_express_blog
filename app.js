// dependencies
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser =require('body-parser')
const router = require('./config/routes')

// Set view templates
app.set('views', './views')
app.set('view engine', 'ejs')

// Use morgan
app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// In this file, routes should be with root api/ prefix
app.use('/api', router)

// Tell express to use a function eg. middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} request to ${req.path} from ${req.ip}`)
//     next() // Tells Express what middleware to use next
// })

// Specify routes in express like routes.rb
// Render index, only one needed in app.js as placeholder
app.get('/', (req, res) => {
    res.render('index', {title: 'Welcome!'})
    // res.status(200).json({message: 'Hello World'})
})

// Render JSON
// app.get('/posts', (req, res) => {
//     res.status(200).json({message: 'Hello World'})
// })



// starting server
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


