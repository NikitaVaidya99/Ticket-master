// const {User}=require('../models/user')

// const authenticate=function(req,res,next){
//     const token=req.header('x-auth')
//     console.log('token', token)
//     User.findByToken(token)
//     .then(function(user){
//         console.log('in authenticte',user)
//       if(user){

//         req.user=user
//         req.token=token
//         next()
//       }
//       else{
//         res.status('401').send({notice:'user is null'})
//       }
//     })
//     .catch(function(err){
//         res.status('401').send(err)
//     })
// }

// module.exports={authenticate}

const {User}=require('../models/user')
const authenticate=function(req, res, next){
    const token=req.header('x-auth')

    User.findByToken(token)
    .then(function(user){
      //res.send(user)
    //  console.log('hi', user)
      if(user){
         
        req.user=user
        req.token=token
        next()
      }
      else{
          res.status('401').send({notice:'user is null'})
      }
    })
    .catch(function(err){
        res.status('401').send(err)
    } )
}

module.exports={
    authenticate
}