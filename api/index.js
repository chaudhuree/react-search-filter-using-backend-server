const express=require('express')
const cors = require('cors')
const app=express()
app.use(cors())
app.get('/',(req,res)=>{
    res.send('everyting is working fine till now')
})
app.listen(5000,()=>console.log('api running on port no 5000'))