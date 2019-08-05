import express from "express"
import Controller from "./../controllers/HomeController"

const router = express.Router()

router.all('/', Controller.home)
router.all('*', Controller.notFound)

export default router