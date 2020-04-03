const mongoose = require ('mongoose')
const validator = require ('validator')
//mongoose will be using mongodb module behind the scenes
//mongoose docs have all the feature details regarding mongoose
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})
