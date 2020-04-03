const express = require("express")
const User = require('../model/users')
const router = new express.Router()
const multer = require('multer')
const auth = require ('../middleware/auth')
const { sendWelcomeEmail, sendCancellationEmail} = require('../emails/account')
//const sharp = require('sharp') //module did not install properly

router.post('/users', async (req,res)=> {

    try{
        const user = new User(req.body)
        sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(200).send([user, token])
    }
        catch(e){
        res.status(400).send()  
    }
})

router.post('/users/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password) //calling the User object makes sense when working on the entire collection
        const token = await user.generateAuthToken()
        res.status(200).send([user, token])
    }
        catch(e){
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {

    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        req.user.save()
        res.status(200).send()
        }
    catch(e){
        res.status(500).send()
    }

})

router.get('/users/me', auth, async (req,res)=> {

        res.send(req.user)  
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send()
    // }
    // )

})

router.get('/users/me', auth, async (req,res)=> {
    const _id=req.params.id

    try{
        res.status(201).send(req.user)    
    }
    catch(e) {
        res.status(500).send() 
    }

})

router.patch('/users/me', auth, async (req,res)=> {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
   
    if(!isValidOperation) {
        return res.status(404).send({error: 'invalid updates'})
    }
    try{
        updates.forEach((update) => {
        req.user[update] = req.body[update]
        })
        console.log(req.user)
        await req.user.save()
        res.status(200).send(req.user) 
        if(!req.user) {
            return res.status(404).send()
        }
   
    }
    catch(e) {
        res.status(500).send()
    }
    // User.findById(_id).then((user) => {
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })

})

router.delete('/users/me', auth, async (req,res)=> {

    try{
        const user = await User.findByIdAndDelete(req.user._id)
        sendCancellationEmail(user.email, user.name)
        res.send(req.user)    
    }
    catch(e) {
        res.status(500).send() 
    } 

})

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter (req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image file'))
        }
        cb(undefined, true)
    }
})

router.post('/users/me/avatar', auth, upload.single('upload'), async (req, res) => {
    //const buffer = await sharp(req.file.buffer).resize({width:250, height: 250}).png.toBuffer()
    req.user.avatar = req.file.buffer    
    await req.user.save()
    res.send()
}, (error, req, res, next)=> {
        res.status(400).send({error: error.message})
})

router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined    
    await req.user.save()
    res.send()
})

router.get('/users/:id/avatar', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error()
        }
        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar)
    } catch (e){
        res.status(400).send()
    }
})

module.exports = router