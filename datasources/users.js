// IMPORT users data
const users = require('../data/users.json')
const shows = require('../data/shows.json')
const {DataSource} = require('apollo-datasource');
const _ = require('lodash')
const bcrypt = require('bcryptjs')

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
        users.forEach(async (user) => {
            const hashPassword = await bcrypt.hash(user.password, 10)
            user.password = hashPassword
        })
        return _.filter(users, args)
    }

    async addUser(user) {
        const hashPassword = await bcrypt.hash(user.password, 10)
        user.password = hashPassword
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

    findShow(show) {
        // PUSH A SHOW TO USERS WATCHED ARRAY
        const foundShow = shows.find(item => item.id === show.id)
        console.log(foundShow)
        console.log(users)
        users.forEach(user => user.shows.push(foundShow))
        console.log(users)
        return foundShow
    }

    updateUser({id, username, password}) {
        const user = users.find(item => item.id = id)
        user.username = username
        user.password = password
        console.log(user)
        return user
    }

}

module.exports = UserAPI;