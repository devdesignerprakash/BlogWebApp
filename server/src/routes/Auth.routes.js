import express from 'express'
import AuthControllers from '../controllers/Auth.controller.js'

const AuthRouter = express.Router()



AuthRouter.post('/register', AuthControllers.register)

export default AuthRouter