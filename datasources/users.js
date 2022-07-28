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



}

module.exports = UserAPI;