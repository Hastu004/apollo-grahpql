const { mongoose } = require('mongoose')
require('dotenv').config({ path: __dirname + '/.env' })

const DB_URL = process.env['DB_URL'];

const connectDB = async () => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) throw err
        console.log('Conectado a la base de datos')
    })
}

module.exports = { connectDB }