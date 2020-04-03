//FILE TO START THE APPLICATION AND BUILD THE REST API
const express = require("express")
//connect to the database using mongoose
require('./db/mongoose')
//DEFINE THE MODELS
const User = require('./model/users')
const Task = require('./model/tasks')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const bcrypt = require('bcryptjs')
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     console.log(req.method)
//     if(req.method === 'GET') {
//         res.status(400).send('Get requests are disabled')
//     } else{
//         next()
//     }
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


const multer = require('multer')

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 30000000
    },
    fileFilter (req, file, cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word Document'))
        }
        cb(undefined, true)
    }
})

//setup the endpoint where the client is able to upload the files

app.post('/upload', upload.single('upload'), (req,res) => {
    res.send()
}, (error, req, res, next)=> {
        res.status(400).send({error: error.message})
})

//myFunction()

//without middleware: request > run routehandler

//with middleware request > do something > run routehandler

const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign ({_id:'abcd1234'},'this is my secret')
//     console.log(token)
//     const data = jwt.verify(token, 'this is my secret')
//     console.log(data)
// }
// myFunction()
//ALL ENDPOINTS ARE SETUP UNDER THE ROUTERS FOLDER

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//const Task = require('./model/tasks')
