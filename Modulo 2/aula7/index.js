const express = require('express')
const app = express()

app.get ('/',(req,res)=>{
    res.send('olá turma da blue')
})

app.listen(3000)