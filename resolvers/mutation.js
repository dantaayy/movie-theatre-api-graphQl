module.exports = {
    toggleWatchedShow: (parent, {title}, {dataSources}, info) => {
        return dataSources.showAPI.toggleWatchedShow(title);
    },
}