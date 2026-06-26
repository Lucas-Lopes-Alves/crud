import express from "express"
import db from "../db.js"

const router = express.Router()

async function infoUser(req, res) {
    const { nome, email, senha } = req.query
    try {
        let valores = []
        let query = "SELECT * FROM usuarios WHERE 1=1 "
        if (nome) {
            query = query + "AND nome = ? "
            valores.push(nome)
        }

        if (email) {
            query = query + "AND email = ? "
            valores.push(email)
        }

        if (senha) {
            query = query + "AND senha = ? "
            valores.push(senha)
        }

        const retorno = await db.query(query, valores)

        if (retorno.length < 1) {
            return res.status(500).json({message: "erro"})
        }

        return res.status(200).json(retorno)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "erro"})
    }
}

router.get("/getUsuarios", infoUser)

export default router