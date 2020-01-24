const mongoose=require('mongoose')
const CONNECTION = process.env.MONGODB_URL || 'mongodb://localhost:27017/ticket-master-backend'
const configureDB=()=>{
    //db configuration
    mongoose.connect(CONNECTION, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
   
    // mongoose.connect('mongodb+srv://nikita_21:nikita123@cluster0-wldti.mongodb.net/test?retryWrites=true&w=majority', {
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true
    // })
    .then(()=>{
        console.log('connected to db (ticket master)')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=configureDB