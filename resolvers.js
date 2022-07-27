module.exports = {
    Query: {
        shows: (parent, args, {dataSources}, info) => {
            return dataSources.showAPI.getShows(args);
        },
        showsByRating: (parent, {rating}, {dataSources}, info) => {
            return dataSources.showAPI.getShowsByRating(rating);
        }
    }
}