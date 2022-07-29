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

    getShowsByRating(rating) {
        const matchedShows = _.filter(shows, ['rating', rating])
        return matchedShows
    }

    toggleWatchedShow(title) {
        const watchedShows = _.filter(shows, ['title', title])
        watchedShows[0].watched = !watchedShows[0].watched
        return watchedShows[0]
    }
}

module.exports = ShowAPI;