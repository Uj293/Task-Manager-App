require('../src/db/mongoose')
const Task = require('../src/models/task')
// ObjectId("641b264c382519a5cb22d971")
const deleteTaskAndCount = async(id)=>{
    const task = Task.findByIdAndDelete(id)
    const count = Task.countDocuments({completed: false})
    return count
}
deleteTaskAndCount('641b264c382519a5cb22d971').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})