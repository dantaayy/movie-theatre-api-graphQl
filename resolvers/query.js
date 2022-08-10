module.exports = {
    shows: (parent, args, {dataSources}, info) => {
        return dataSources.showAPI.getShows(args);
    },
    users: (parent, args, {dataSources}, info) => {
        return dataSources.userAPI.getUsers(args);
    }
}