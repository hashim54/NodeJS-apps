//CRUD = create, read, update, delete

// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
//connecting to the db is an asynchronous operation

const id = new ObjectID()

console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({ _id: new ObjectID("5e8123d27eb9c40a404e904a") } , (error, user) => {
        if(error) {
            console.log('Unable to fetch')
        }
        console.log(user)
    })

    // db.collection('users').updateMany({
    //     age: 26
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then( (result) => {
    //     console.log(result)
    // }).catch ( (error) => {
    //     console.log(error)
    // })
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then( (result) => {
    //     console.log(result)
    // }).catch ( (error) => {
    //     console.log(error)
    // })
    db.collection('sportsStars').deleteOne({
        name: 'Messi'
    }).then( (result) => {
        console.log(result)
    }).catch ( (error) => {
        console.log(error)
    })

    // db.collection('users').find({ age: 26 }).count((error, count) => {
    //     console.log(count)
    // })    
    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'moe',
    //     age: 26
    // }, (error, result) => {
    // if(error) {
    //     return console.log('Unable to insert')
    // }

    // console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age: 27
    //     },
    //     {
    //         name: 'Joe',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to add')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('sportsStars').insertMany([
    //     {
    //         name:'Djoker',
    //         age: 27
    //     },
    //     {
    //         name: 'Messi',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to add')
    //     }
    //     console.log(result.ops)
    // })


})

