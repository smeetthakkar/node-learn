const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         // if(!file.originalname.endsWith('.pdf')) {
//         //     return cb(new Error('Please upload a pdf'))
//         // }
        
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word doc'))
//         }

//         cb(undefined, true)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('Error from MiddleWare')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message})
// })

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})

// //User Task Relationship
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5f8f41263166f03c087fb03a')
//     // await task.populate('owner').execPopulate()
//     // // console.log(task)
//     // console.log(task.owner)

//     const user = await User.findById('5f8f3e59ac96fc3b7380a431')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// //Hiding private data sample code
// const pet = {
//     name: "Mao"
// }

// pet.toJSON = function() {
//     return {}
//     // console.log(this)
//     // return this
// }

// console.log(JSON.stringify(pet))

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon')
// })

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('Get requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     next()
// })



// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()


// const jwt = require('jsonwebtoken')
// const { json } = require('express')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'user1234'}, 'test', { expiresIn: '2 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'test')
//     console.log(data)
// }

// myFunction()
