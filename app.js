const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

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

    app.listen(3000, () => {
        console.log('Server on port 3000');
    })
}

start();