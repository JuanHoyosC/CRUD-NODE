const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practica', { useFindAndModify: false }, ()=>{
    console.log('Base de datos conectada')
})

