import express from 'express'
import Controller from '../controllers/InfoController'
import JwtMiddleware from './../middlewares/JwtMiddleware'

const router = express.Router()

const api_name = '/api/info'

router.post(api_name, JwtMiddleware, Controller.create)
router.put(api_name + '/:id', JwtMiddleware, Controller.update)
router.delete(api_name + '/:id', JwtMiddleware, Controller.delete)
router.get(api_name, Controller.list)
router.get(api_name + '/:id', JwtMiddleware, Controller.show)

export default router