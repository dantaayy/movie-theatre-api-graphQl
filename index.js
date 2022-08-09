const {ApolloServer, gql, ApolloError} = require('apollo-server');
const {ApolloServerPluginLandingPageLocalDefault, AuthenticationError} = require('apollo-server-core')
const colors = require('colors')
const ShowAPI = require('./datasources/shows')
const UserAPI = require('./datasources/users')
const express = require('express')
const jwks = require('jwks-rsa')
const cors = require('cors')

// SCHEMA
const typeDefs = require('./schema')

// DATASOURCE
const dataSources = () => ({
    showAPI: new ShowAPI(),
    userAPI: new UserAPI()
})

// RESOLVER FUNCTION
const resolvers = require('./resolvers')

// JSON WEB TOKEN
const SECRET = '4pcPyMD09o1PSyXnrXCjTwr4BsezdI1AVTmud2fU4'

// CREATE APOLLO SERVER
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({req}) => {
    // GET USER TOKEN
    const token = req.headers.authorization || '';

    // Try to retrieve user with the token
    const user = getUser(token)

    // OPTIONALLY BLOCK USER
    if(!user) throw new AuthenticationError('You must be logged in!')

    // add user to context
    return {user}
  },
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({embed: true})
  ],
  // HANDLE ERRORS
  debug: false,
  formatError: (error) => {
    if(error.extensions.code === 'INTERNAL_SERVER_ERROR'){
      return new ApolloError('Trouble connecting', 'ERROR', {token: "uniquetoken"})
    }
  }
});


// LISTEN ON TO SERVER
server
  .listen({port: process.env.PORT || 5000})
  .then(({url}) => {
    console.log(colors.blue.inverse(`GraphQL is up and running @ ${url}`))
})