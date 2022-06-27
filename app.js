const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')
require('dotenv').config({ path: __dirname + '/.env' })

const { connectDB } = require('./db')
connectDB()

const app = express()

app.get('/', (req, res) => res.send('Welcome to API'))
// app.use('*', (req, res) => res.status(404).send('Not found'))



async function start() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app });

    port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log(`Server on port ${port}`);
    })
}

start();