const {gql} = require('apollo-server')

module.exports = gql`
type Query {
    shows(
        title: String,
        genre: String,
        rating: Int,
        status: String,
    ): [Show],
    showsByRating(rating:Int): [Show],
    users(
        username: String,
        password: String
    ): [User]
}

type Show {
    title: String,
    genre: String,
    rating: Int,
    status: String,
    watched: Boolean
}

type User {
    username: String,
    password: String
    watched: [String]
}

input ShowInput {
    title: String,
    genre: String,
}

type Mutation {
    toggleWatchedShow(title: String): Show
    addNewShow(show: ShowInput): Show,
    deleteShow(show: ShowInput): Show
}


`