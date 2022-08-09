module.exports = {
    shows: (parent, args, {dataSources}, info) => {
        return dataSources.showAPI.getShows(args);
    },
    showsByRating: (parent, {rating}, {dataSources}, info) => {
        return dataSources.showAPI.getShowsByRating(rating);
    },
    users: (parent, args, {dataSources, context}, info) => {
        // CHECK IF USER IS AN ADMIN OR EXISTS
        if (!context.user || !context.user.roles.includes('admin')) return null;

        return dataSources.userAPI.getUsers(args);
    }
}