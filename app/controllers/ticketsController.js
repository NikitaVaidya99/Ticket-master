const {Ticket}=require('../models/ticket')
module.exports.list=(req, res)=>{
    Ticket.find({user:req.user._id}).populate('customer',['name']).populate('employee',['name']).populate('department', ['name'])
    .then((ticket)=>{
        res.json(ticket)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req, res)=>{
    const body=req.body
    const ticket=new Ticket(body)
    ticket.user=req.user._id
    ticket.save()
    .then((ticket)=>{
        res.json(ticket)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req, res)=>{
    const id=req.params.id
    Ticket.findOne({_id:id, user:req.user._id}).populate('customer',['name']).populate('department',['name']).populate('employee',['name'])
    .then((ticket)=>{
        if(ticket){
            res.json(ticket)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update=(req, res)=>{
    const id=req.params.id
    const body=req.body
    Ticket.findOneAndUpdate({_id:id, user:req.user._id}, body,{
        new:true,
        runValidators:true
    }).populate('customer', ['name']).populate('department', ['name']).populate('employee',['name'])
    .then((ticket)=>{
        if(ticket){
            res.json(ticket)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}

module.exports.destroy=(req, res)=>{
    const id=req.params.id
    Ticket.findOneAndDelete({_id:id, user:req.user._id})
    .then((ticket)=>{
        if(ticket){
            res.json(ticket)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}