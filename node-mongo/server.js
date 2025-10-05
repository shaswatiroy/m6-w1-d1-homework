const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

require('./app/models/inventory.model.js')

// configure database
require('dotenv').config();
const mongoose = require('mongoose')

//connecting to database
mongoose.connect(process.env.DATABASE)

mongoose.connection
.on('open', ()=>{
    console.log('Mongoose connection open');
})
.on('error', (err) =>{
    console.log('Connection error: ' + err.message);
})

require('./app/routes/inventory.routes.js')(app);

const server = app.listen(8080, function (){
    const host = server.address().address
    const port = server.address().port

    console.log(`App listening at http://${host}:${port}`);
})