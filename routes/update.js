import express from "express"
import db from "../db.js"

const router = express.Router()

async function updateUser(req, res) {
    const { id } = req.params
    const { nome, email, senha } = req.body

    try {
        const query = await db.query("UPDATE usuarios SET nome = COALESCE(?,nome), email = COALESCE(?,email), senha = COALESCE(?,senha) WHERE id = ?",
            [nome, email, senha, id]
        )

        if (query.affectedRows < 1) {
            return res.status(500).json({ message: "Não foi possivel atualizar o usúario" })
        }

        return res.status(200).json({message:"Usúario atualizado"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Erro interno!"})
    }
}

router.patch("/atualizar/:id", updateUser)

export default router