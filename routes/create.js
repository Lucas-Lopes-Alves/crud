import express from "express"
import db from "../db.js"

const router = express.Router()

async function registerUser(req, res) {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) {
        return res.status(400).status({ message: "Informações faltando" })
    }
    try {
        const query = await db.query("INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)", [nome, email, senha])

        if (query.affectedRows < 1) {
            return res.status(500).json({ message: "Não foi possivel criar o usúario" })
        }

        return res.status(201).json({message: "Usúario criado com sucesso"})
    } catch (error) {
        if (error.code == "ER_DUP_ENTRY"){
            return res.status(409).json({message: "Usúario já existente"})
        }
        console.log(error)
        return res.status(500).json({message: "Erro interno!"})
    }
}

router.post("/cadastrarUsuario", registerUser)

export default router