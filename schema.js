const {gql} = require('apollo-server')

module.exports = gql`
type Query {
    shows(
        title: String,
        genre: String,
        rating: Int,
        status: String,
    ): [Show],
    showsByRating(rating:Int): [Show]
}

type Show {
    title: String,
    genre: String,
    rating: Int,
    status: String,
}
`