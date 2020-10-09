require('../src/db/mongoose')
const Task = require('../src/models/task')
const { count } = require('../src/models/task')

// Task.findByIdAndDelete('5f38041d9e09936f1e27d173').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteAndCountTask = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( { completed: false } )
    return count
}

deleteAndCountTask('5f380af66a29d97026d70e40').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})