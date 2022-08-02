module.exports = {
    toggleWatchedShow: (parent, {title}, {dataSources}, info) => {
        return dataSources.showAPI.toggleWatchedShow(title);
    },
    addNewShow: (parent, {show}, {dataSources}, info) => {
        return dataSources.showAPI.addShow(show);
    },
    deleteShow: (parent, {show}, {dataSources}, info) => {
        return dataSources.showAPI.deleteShow(show);
    },
    addUser: (parent, {user}, {dataSources}, info) => {
        return dataSources.userAPI.addUser(user);
    },
    deleteUser: (parent, {user}, {dataSources}, info) => {
        return dataSources.userAPI.deleteUser(user)
    },
    addWatchedShow: (parent, {user, show}, {dataSources}, info) => {
        return dataSources.userAPI.addWatchedShow(user, show)
    }
}