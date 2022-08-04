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
    userId: [Int],
    users: [User]
}

input ShowInput {
    id: ID!,
    title: String,
    genre: String,
    rating: Int
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
    shows: [Show]
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
    addNewShow(show: ShowInput): Show,
    deleteShow(show: DeleteShowInput): Show,
    addUser(user: UserInput): User!,
    deleteUser(user: DeleteUserInput): User,
    findShow(show: WatchedShowInput): Show,
    updateShow(id: ID!, title: String, genre: String, status: String): Show
}

`