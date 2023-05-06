const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const useRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize : 1000000
    },
    fileFilter(req , file ,  cb){
        
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a PDF'))
        } 
        cb(undefined , true)
    }
})

const errorMiddleWare = (req , res , next)=>{
    throw  new Error("From my middleware")
}

app.post('/upload' , errorMiddleWare, (req , res)=>{
     res.send()
} , (error , req , res , next)=>{
    res.status(400).send({error: error.message})
})






app.use(express.json())
app.use(useRouter)
app.use(taskRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// app.use((req , res , next)=>{
//       console.log(req.method , req.path)
//       if(req.method === 'GET'){
//         res.send('GEYT request are not allowed')
//       }
//       else{
//       next()}
// })

// const jwt = require('jsonwebtoken')
// const myfunction = async ()=>{
//    const token = jwt.sign({_id : 'abc123'} , 'thisismynewcourse' , {'expiresIn': '7 days'})
//    console.log(token)
//    const data = jwt.verify(token , 'thisismynewcourse')
//    console.log(data)
// }
// myfunction()
// const pet ={
//     "name": "JOJO"
// }
// pet.toJSON = function() {
//     console.log(this)
//     return this
// }
// console.log(JSON.stringify(pet))
// const main = async ()=>{
//     const task = await Task.findById('6438dbcf4452d59f6b5771a6')
//     await task.populate('owner')
//     console.log(task.owner)
// }
// main()

// const main = async ()=>{
//     const user = await User.findById('6438d98e3f52cd5ac9118092')
//     await user.populate('tasks')
//      console.log(user.tasks)
// }
// main()