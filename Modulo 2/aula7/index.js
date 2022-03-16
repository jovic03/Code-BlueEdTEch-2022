import express from 'express'

const app = express()

app.set('view engine', 'ejs')

const port = 3000

app.listen(port, () => {
    console.log(`Meu servidor está rodando na porta ${port}`)
    })

app.get("/", (req, res) => {
    res.render("index.ejs", {
        nome: "Sexta-feira"
    })
})

app.get("/sobre", (req, res) => {
    res.render("sobre.ejs")
})