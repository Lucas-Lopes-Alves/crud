import express from "express"
import db from "../db.js"

const router = express.Router()

async function deleteUser(req, res) {
    const { id } = req.params

    try {
        const query = await db.query("SELECT * FROM usuarios WHERE id = ?", [id])

        if (query.length < 1) {
            return res.status(404).json({ message: "Usúario não encontrado" })
        }

        const deletion = await db.query("DELETE FROM usuarios WHERE id = ?", [id])

        if (deletion.affectedRows < 1) {
            return res.status(500).json({ message: "Não foi possivel deletar o usuario" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Erro interno!"})
    }
}

router.delete("/deletarUsuario/:id", deleteUser)

export default router