// IMPORT users data
const users = require('../data/users.json')
const {DataSource} = require('apollo-datasource');
const _ = require('lodash')

class UserAPI extends DataSource {
    // CONSTRucTOR INHERITS PARENT
    constructor () {
        super();
    }

    // CONTROL CACHNG FOR FUTURE
    initialize (config) {

    }

    // METHODS FOR USERS
    getUsers(args) {
        return _.filter(users, args)
    }

    addUser(user) {
        users.push(user)
        return user
    }

    deleteUser(user) {
        // JS FUNCTION FINDINDEX()
        const index = users.findIndex(item => item.username === user.username)
        console.log(index)
        const deletedUser = users.splice(index, 1)
        return deletedUser
    }

    addWatchedShow(user, show) {
        // PUSH A SHOW TO USERS WATCHED ARRAY
        const arr = user.watched
        arr.push(show)
        console.log(user);
    }

}

module.exports = UserAPI;