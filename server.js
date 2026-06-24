
const express = require('express')

const app = express()

app.use((req , res , next)=>{
     console.log('m1');
     next()
     
})





app.get('/' , (req ,res )=>{
    res.json({
        message : "backend is running"
    })
})

app.listen(3000 , ()=>{
    console.log('server is running port 3000');
    
})