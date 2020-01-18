const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const User = require('../models/user')

router.post('/', (req, res)=> {
    userController.addUser(req.body)
    res.redirect('/')
})

router.get('/', async (req, res) =>{
    const user = await userController.getUsers()
    res.render('template', {user:user})
})

router.post('/:id', async (req, res)=>{
    userController.update(req.body, req.params.id)
    const user = await userController.getUsers()
    res.redirect('/')
})

router.get('/user/:id', async (req, res) =>{
    const user = await userController.getUser(req.params.id)
    res.render('update', {user:user})
})

router.get('/:id', async (req, res) =>{
    await userController.delete(req.params.id)
    res.redirect('/')
})

/*
router.post('/:id', async  (req, res)=>{
    userController.delete(req.body, req.params.id)
    const user = await userController.getUsers()
    res.render('template', {user:user})
})
*/
module.exports = router