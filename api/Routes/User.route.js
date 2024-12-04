import express from "express"
import { login, register } from "../Controllers/User.controller.js"

const router = express.Router()

//CREATE
router.post("/register" ,register)
router.post("/login",login)

export default router