// IMPORT users data
const users = require('../data/users.json')
const shows = require('../data/shows.json')
const {DataSource} = require('apollo-datasource');
const _ = require('lodash')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// HASH PASSWORD BEFORE QUERING THEM
users.forEach(async (user) => {
            const hashPassword = await bcrypt.hash(user.password, 10)
            user.password = hashPassword
    })

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

    async signUp(user) {
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

    async updateUser({id, username, password}) {
        const user = users.find(item => item.id = id)
        const hashPassword = await bcrypt.hash(user.password, 10)
        user.username = username
        user.password = hashPassword
        console.log(user)
        return user
    }

    async login({username, password}) {
        const user = await users.find(item => item.username === username)
        console.log(user)
        if(!user) {
            throw new Error('No user with that username!')
        }

        // COMPARE PLAINTXT PW W/ HASH PW
        const valid = await bcrypt.compare(password, user.password)
        // console.log(valid)
        if(!valid) {
            throw new Error('Incorrect password')
        }

        // .SIGN() WILL RETURN 1ST OBJ THAT IS KNOWN AS DATA
        // SIGNED WITH THE SECRET FOR AUTHENTICATION
        // NO SECRET === USE ON CLIENT SIDE
        const token = jwt.sign(
            {
                user: _.pick(user, ['id', 'username'])
            },
            SECRET,
            {
                expiresIn: "100d"
            }
        );

        return token;
    }

}

module.exports = UserAPI;