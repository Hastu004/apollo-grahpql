const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

require('dotenv').config({ path: __dirname + '/.env' })

const { connectDB } = require('./db')
connectDB()

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

const app = express()

app.get('/', (req, res) => res.send('Welcome to API'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


async function start() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app });

    port = process.env.PORT || 4000

    app.listen(port, () => {
        console.log(`Server on port ${port}`);
    })
}

start();