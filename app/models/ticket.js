const mongoose=require('mongoose')

const Schema=mongoose.Schema
const ticketSchema=new Schema({
    customer:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Customer'
    },
    department:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Department'

    }, 
    employee:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Employee'

    }],
    code:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['high', 'medium','low'],
        required:true

    },
    isResolved:{
        type:Boolean,
        default:false,
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})
const Ticket=mongoose.model('Ticket', ticketSchema)
module.exports={Ticket}