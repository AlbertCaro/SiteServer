import express from "express"
import Controller from "../controllers/InfoController"

const router = express.Router()

const api_name = "/api/info"

router.post(api_name, Controller.create)
router.put(api_name+"/:id", Controller.update)
router.delete(api_name+"/:id", Controller.delete)
router.get(api_name, Controller.list)
router.get(api_name+"/:id", Controller.show)

export default router