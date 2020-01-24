const mongoose=require('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')

const Schema=mongoose.Schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        minlength:3,
        unique:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email'
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    tokens:[
        {
            token:{
                type:String
            },
            createdAt:{
                type:Date,
                default:Date.now()
            }
        }
    ]
})

userSchema.pre('save', function(next){
    const User=this
   if(User.isNew){
    bcryptjs.genSalt(10)
    .then(function(salt){
        bcryptjs.hash(User.password, salt)
        .then(function(encrypted){
            User.password=encrypted
            next()
        })
    })
   }
   else{
        next()
   }
})

userSchema.statics.findByCredentials=function(email, password){
    const User=this
    console.log('user', this)
    return User.findOne({email})
    
            .then(function(user){
                console.log(user)
                if(!user){
                    return Promise.reject('invalid email/ invalid password')
                }
                else{
                    return bcryptjs.compare(password, user.password)
                    .then(function(result){
                        if(result){
                            return Promise.resolve(user)
                        }
                        else{
                            return Promise.reject('invalid email/invalid password')
                        }
                    })
                }
            })
            .catch(function(err){
               return Promise.reject(err)
            })
}

userSchema.methods.generateToken=function(){
    const user=this
    const tokenData={
        id:user._id,
        username:user.username,
        createdAt:Number(new Date())
    }
    const token=jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({token})

    return user.save()
    .then(function(user){
        return Promise.resolve(token)
    })
    .catch(function(err){
        Promise.reject(err)
    })
}

// userSchema.statics.findByToken=function(token){
//     const User=this
//     let tokenData
//     try{
//         tokenData=jwt.verify(token, 'jwt@123')
//     }
//     catch(err){
//         return Promise.reject(err)
//     }
//     console.log('tokenData', tokenData)
//     return User.findOne({
//         _id:tokenData._id,
//         'tokens.token':token
//     })
// }
userSchema.statics.findByToken=function(token){
    const User=this
    let tokenData
        try{
            tokenData=jwt.verify(token,'jwt@123')
        }
        catch(err){
            return Promise.reject(err)
        }
        console.log('tokenData', tokenData)
        return User.findOne({
            _id:tokenData.id,
            'tokens.token':token
        })
    }


const User=mongoose.model('User', userSchema)
module.exports={User}