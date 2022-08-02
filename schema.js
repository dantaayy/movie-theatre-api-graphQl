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
    id: ID!,
    title: String,
    genre: String,
    rating: Int,
    status: String,
    userId: [Int]
}

input ShowInput {
    id: ID!,
    title: String,
    genre: String,
}

input WatchedShowInput {
    id: ID!
}

input DeleteShowInput {
    title: String,
}

type User {
    id: ID!,
    username: String,
    password: String
    watched: [Show!]
}

input UserInput {
    id: ID!,
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
    addWatchedShow(user: UserInput, show: WatchedShowInput): Show
}

`