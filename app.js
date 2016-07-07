const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Specify routes in express like routes.rb
app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World'})
})




// starting server
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


