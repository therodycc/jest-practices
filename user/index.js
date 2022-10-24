const { storage } = require('../lib/storage')

module.exports.saveUsername = (username) => {
    storage.save({ key: "username", value: username })
}

module.exports.getUsername = () => {
    return storage.get({ key: "username" })
}