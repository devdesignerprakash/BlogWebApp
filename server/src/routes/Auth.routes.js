import express from 'express'
import AuthControllers from '../controllers/Auth.controller.js'

const AuthRouter = express.Router()
AuthRouter.post('/register', AuthControllers.register)
AuthRouter.post('/login', AuthControllers.login)
AuthRouter.post('/google-login', AuthControllers.googleLogin)

export default AuthRouter