import express from 'express'
import Controller from './../controllers/LoginController'

const router = express.Router()

const api_name = '/api/authenticate'

router.post(api_name, Controller.singin)

export default router