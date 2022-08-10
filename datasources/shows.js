const shows = require('../data/shows.json')
const {DataSource} = require('apollo-datasource')
const _ = require('lodash')

class ShowAPI extends DataSource {
    // USING SUPER ON CONSTRUCOTR INHERITS EVERYTHING FROM PARENT CLASS
    constructor () {
        super();
    }

    // FOR CACHING PURPOSE
    initialize(config) {

    }

    // GET METHOD FOR ALL SHOWS
    getShows(args) {
        return _.filter(shows, args);
    }

    addShow(show) {
        shows.push(show)
        return show;
    }

    deleteShow(show) {
        // JS FINDINDEX() FUNCTION
        const index = shows.findIndex(item => item.title === show.title)
        // console.log(index)
        const deletedItem = shows.splice(index, 1)
        // console.log(deletedItem)
        return deletedItem
    }

    updateShow({id, title, genre, status}) {
        const foundShow = shows.find(item => item.id === id)
        foundShow.title = title
        foundShow.genre = genre
        foundShow.status = status

        console.log(foundShow)
        return foundShow
    }
}

module.exports = ShowAPI;