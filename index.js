const express= require('express')
const configureDB= require('./config/database')
const router=require('./config/routes')

const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
const port=3015
configureDB()

app.get('/', (req, res)=>{
    res.send('welcome to the ticket master backend')
})

app.use('/', router)





app.listen(port, ()=>{
    console.log('listening on port ', port)
})