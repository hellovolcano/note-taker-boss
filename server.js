const express = require('express')
const path = require('path')
const { PassThrough } = require('stream')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const notes = require("./db/db.json")

const PORT = process.env.PORT || 3001
const app = express()


// parse incoming string or array data
app.use(express.urlencoded({ extended: true}))
//parse incoming JSON data
app.use(express.json())

// give access to the front-end assets
app.use(express.static('public'))

// api & html routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})