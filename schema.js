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
}

input ShowInput {
    title: String,
    genre: String,
}

input DeleteShowInput {
    title: String,
}

type User {
    username: String,
    password: String
    watched: [Show!]
}

input UserInput {
    username: String,
    password: String
}

input DeleteUserInput {
    username: String,
}

type Mutation {
    toggleWatchedShow(title: String): Show
    addNewShow(show: ShowInput): Show,
    deleteShow(show: DeleteShowInput): Show,
    addUser(user: UserInput): User,
    deleteUser(user: DeleteUserInput): User,
}

`