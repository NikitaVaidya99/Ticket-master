const mongoose= require('mongoose')

const Schema=mongoose.Schema
const customerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        maxlength:10

    },
    email:{
        type:String,
        required:true

    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }

})

const Customer=mongoose.model('Customer', customerSchema)

module.exports=Customer