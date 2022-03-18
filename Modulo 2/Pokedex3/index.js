import express from 'express'

const app =express()
app.set('view engine', 'ejs')//tudo que for ejs dentro da pasta views seja renderizado

const port = 3000

app.listen(port, (req,res)=>{ //configurando servidor

    console.log(`Estou rodando na porta ${port}`)
})

//criando rotas

app.get('/',(req,res)=>{//nome da rota e depois func anonima (callback)
    //res.send('Ola')
    res.render('index.ejs')//renderiza o index.ejs pro usuario
})

app.get('/detalhes',(req,res)=>{//nome da rota e depois func anonima (callback)
    res.render('detalhes.ejs')//renderiza o index.ejs pro usuario
})