const mongoose=require('mongoose')

const configureDB=()=>{
    //db configuration
    mongoose.connect('mongodb://localhost:27017/ticket-master-backend', {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('connected to db (ticket master)')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=configureDB