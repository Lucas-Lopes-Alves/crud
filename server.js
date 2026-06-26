import express from "express"
import "dotenv/config"
import cadastro from "./routes/create.js"
import atualizar from "./routes/update.js"
import ler from "./routes/read.js"
import deletar from "./routes/delete.js"

const app = express()

app.use(express.json())
app.use(cadastro)
app.use(atualizar)
app.use(ler)
app.use(deletar)

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})