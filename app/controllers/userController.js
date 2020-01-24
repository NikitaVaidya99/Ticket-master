const {User}=require('../models/user')
const _=require('lodash')

module.exports.create=function(req, res){
    const body=req.body
    const user=new User(body)
    user.save()
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports.login=function(req, res){
    const body=req.body
    User.findByCredentials(body.email, body.password)
    .then(function(user){
        return user.generateToken()
    })
    .then(function(token){
       // console.log('token', token)
        // res.setHeader('x-auth', token).send(token)
        res.json({'token':token})
    })
    .catch(function(err){
        res.send({'errors':err})
    })
}

module.exports.account=function(req, res){
//    const {user}=req
//    res.send(user)

//console.log('hi check token', req.user)
    const user= _.pick(req.user, ['_id', 'username', 'email'])
    res.json(user)
}

module.exports.logout=function(req, res){
    const {user, token}=req
    User.findByIdAndUpdate(user._id, {$pull:{tokens:{token:token}}})
    .then(function(){
        res.json({'notice':'logged out'})
    })
    .catch(function(err){
        res.send(err)
    })
}