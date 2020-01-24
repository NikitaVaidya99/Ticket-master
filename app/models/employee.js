const mongoose= require('mongoose')
const Schema=mongoose.Schema

const employeeSchema=new Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    mobile:{
        type:String,
        maxlength:10,
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        requied:true,
        ref:'Department'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Employee=mongoose.model('Employee', employeeSchema)
module.exports={
    Employee
}