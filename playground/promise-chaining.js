require('../src/db/mongoose')
const User = require('../src/models/user')
// ObjectId("641815ca11ca1f124eacae2c")
// User.findByIdAndUpdate('641815ca11ca1f124eacae2c' , {age : 30}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age : 30})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//      console.log(e)
// }) 
const updateAgeandCount = async (id , age)=>{
 const user = await User.findByIdAndUpdate(id ,{age} )
 const count = await User.countDocuments({age})
 return count 
}
updateAgeandCount('641815ca11ca1f124eacae2c' , 36).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})