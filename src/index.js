const express = require('express')
const morgan = require('morgan')
const app = express()
const body_parser = require('body-parser')
//setting
app.set('port', 3000 || process.env.PORT)


//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(body_parser.urlencoded({extended:true}));
//router
app.use(require('./routers/user.router'))

//views
app.set('view engine', 'hbs')



//Init
require('./database')

app.listen(app.get('port'), ()=>{
    console.log('CONECTADO EN EL PUERTO', app.get('port'))
})