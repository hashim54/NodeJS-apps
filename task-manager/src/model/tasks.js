const validator = require ('validator')
const mongoose = require ('mongoose')


const taskSchema = new mongoose.Schema({
    definition: {
        type: String,
        required: true
    }, 
    completed: {
        type: Boolean,
        required: true
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'// creating a reference from this field to another model. Model name should be exact same as the other model
    }
}, {
    timestamps: true
})

taskSchema.pre('save', async function (next) {
    const task = this
    console.log('just before saving')
    next()
})

const tasks = mongoose.model('tasks', taskSchema)

module.exports = tasks