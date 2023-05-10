const mongoose = require('mongoose')
const DB = 'mongodb+srv://Uj293:Abc123456@cluster0.dvn94rc.mongodb.net/Task-Manager-Api?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log('Connection is successful')
}).catch((err)=>{
    console.log('no connection')
});


