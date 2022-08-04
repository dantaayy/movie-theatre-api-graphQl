module.exports = {
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
    findShow: (parent, {show}, {dataSources}, info) => {
        return dataSources.userAPI.findShow(show)
    },
    updateShow: (parent, {id, title, genre, status}, {dataSources}, info) => {
        return dataSources.showAPI.updateShow({id, title, genre, status})
    },
    updateUser: (parent, {id, username, password}, {dataSources}, info) => {
        return dataSources.userAPI.updateUser({id, username, password})
    }
}