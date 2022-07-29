module.exports = {
    toggleWatchedShow: (parent, {title}, {dataSources}, info) => {
        return dataSources.showAPI.toggleWatchedShow(title);
    },
    addNewShow: (parent, {show}, {dataSources}, info) => {
        return dataSources.showAPI.addShow(show);
    },
    deleteShow: (parent, {show}, {dataSources}, info) => {
        return dataSources.showAPI.deleteShow(show);
    }
}