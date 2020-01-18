const User = require('../models/user')

userController = {}

userController.addUser = async (req)=> {
    const user = new User(req)
    await user.save()
}

userController.getUsers = async () =>{
    const users =  await User.find()
    return users
}

userController.getUser = async (id) =>{
    const user =  await User.findById(id)
    return user
}

userController.update = async (req, id) =>{
    await User.findByIdAndUpdate(id, {$set: req})
}

userController.delete = async (id) =>{
    await User.findByIdAndRemove(id)
}

module.exports = userController