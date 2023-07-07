const { MongoClient } = require('mongodb')

let dbConnection
let URI = 'mongodb+srv://codenito:<password>@nodeapi.xr7lkoc.mongodb.net/?retryWrites=true&w=majority'
exports.connectToDb = (cb) => {
    MongoClient.connect(URI)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
}

exports.getDb = () => dbConnection
