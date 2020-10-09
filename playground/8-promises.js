const { resolve } = require("path")
const { rejects } = require("assert")

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1,2).then((sum) => {
//     console.log(sum)

//     add(sum, 3).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})

// const doWorkPromise = new Promise((resolve, reject) => {
//     reject('an error') //executes either resolve or reject
//     resolve([3,2,1])
// })

// // console.log(typeof(doWorkPromise)) //Object

// doWorkPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })