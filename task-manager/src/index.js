const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000


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

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})



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
