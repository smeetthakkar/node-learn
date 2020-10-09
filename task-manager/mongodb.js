//CRUD - create, read, update and delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Connection Failed!')
    }
    
    console.log('Connection Successful!')

    const db = client.db(databaseName)

    //Delete data from DB

    db.collection('tasks').deleteOne({
        description: "Plan daily workouts"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //update data from DB

    // const completedCount = db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(result)
    // })

    // console.log(completedCount)

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5f28434f3e4cc829b81510a0")
    // }, {
    //     $set: {
    //         name: 'Sam'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //read data from the db
    
    // db.collection('tasks').findOne({_id: new ObjectID("5f284623712fdc29d2042406")}, (error,task) => {
    //     console.log(task)
    // })
    
    // db.collection('tasks').find({ completed: false }).toArray((error,tasks) => {
    //     console.log(tasks)
    // })
    
    // db.collection('users').findOne({_id: new ObjectID('5f284564c58b6729c6ecf8f9')}, (error, user) => {
    //     if(error) {
    //         return console.log('Invalid')
    //     }
    //     console.log(user)
    // })
    
    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age:27}).count((error, count) => {
    //     console.log(count)
    // })
    
    // db.collection('users').findOne({ name: 'Jane'}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

})

//Create data in the databas
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Grocery Shopping',
    //         completed: true
    //     },
    //     {
    //         description: 'Plan daily workouts',
    //         completed: false
    //     },
    //     {
    //         description: 'Become a programmer',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jane',
    //         age: 35
    //     },
    //     {
    //         name: 'Sam',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })
    
    // db.collection('users').insertOne({
    //     name: 'Smeet',
    //     age: 27
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
