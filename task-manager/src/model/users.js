const validator = require ('validator')
const mongoose = require ('mongoose')
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('../model/tasks')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is not valid bacha')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7, 
        trim: true, 
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value<0){
                throw new Error('You must be retarded!')
            }
        }
    }, 
    tokens: [{
        token: {
            type: String, 
            required: true
        }
    }], 
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

userSchema.virtual('tasks', {
    ref: 'tasks',
    localField: '_id',
    foreignField: 'owner'
})


userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
     return userObject
}


userSchema.methods.generateAuthToken = async function () {
    const user = this 
    const token = jwt.sign ({_id: user._id.toString()}, 'thisismysecret')

    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => { // static methods are acessible on the model whereas methods are accessible on the instances
    const user = await User.findOne({ email })
        if(!user){
            throw new Error ('Unable to login')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw new Error ('Unable to login')
        }
        return user
}
//before saving we will be running some validation
userSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')) {
        user.password =  await bcrypt.hash(user.password, 8)
    }   
    next()
})

// Delete user tasks when user is removed

userSchema.pre('remove', async function(next){
        const user = this
        await Task.deleteMany({owner: user._id})
        next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
// const me = new User({
//     name: 'Don   ',
//     email: 'donjon@donjon.com    ', 
//     password: '  Password '
// })

//  me.save().then(() => {
//     console.log(me)
//  }).catch((error) => {
//     console.log('Error!', error)
//  })