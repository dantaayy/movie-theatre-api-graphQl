const {ApolloServer, gql} = require('apollo-server');
const colors = require('colors')
const users = require('./data/users.json')
const ShowAPI = require('./datasources/shows')


// SCHEMA
const typeDefs = require('./schema')

// DATASOURCE
const dataSources = () => ({
    showAPI: new ShowAPI()
})

// RESOLVER FUNCTION
const resolvers = require('./resolvers')

// CREATE APOLLO SERVER
const server = new ApolloServer({typeDefs, resolvers, dataSources});

// LISTEN ON TO SERVER
server
  .listen({port: process.env.PORT || 5000})
  .then(({url}) => {
    console.log(colors.blue.inverse(`GraphQL is up and running @ ${url}`))
})
