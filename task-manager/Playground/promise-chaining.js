require ('../src/db/mongoose')
const User = require('../src/model/users')
const Task = require ('../src/model/tasks')

//5e81f5b95ffe540b0814022e
// findByIdAndUpdate, findByIdAndDelete, countDocuments > All of them return promises
// const findIdandUpdate = User.findByIdAndUpdate('5e81f5b95ffe540b0814022e', {age: 1}).then((user) => {
//     //console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const findIdandUpdate = async (id, age) => {

   const user = await User.findByIdAndUpdate(id, {age})
   const count = await User.countDocuments( {age} )
   return count
}

findIdandUpdate('5e81fd07d4198f0b2073dc20', 0).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})



// Task.findByIdAndDelete('5e8246d6b1f5130d3dae62e3').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const findIdandDelete = async (id) => {

    const task = await Task.findByIdAndDelete(id)
    const count = await User.countDocuments( {completed:false} )
    return count
 }
 
 findIdandDelete('5e81f64f2cb1aa0b0e3a21c1').then((result) => {
     console.log(result)
 }).catch((e) => {
     console.log(e)
 })