import express from "express"
import db from "../db.js"

const router = express.Router()

async function criar(req,res) {
    const {nome , email , senha} = req.body
    if (!nome || !email || !senha){
        res.status(400).status({message: "Informações faltando"})
    }

}