import express from 'express'
import { googleLogin, signinUser, signupUser } from '../controller/userCtrl.js'

const router=express.Router()



router.post('/signup',signupUser)
router.post('/signin',signinUser)
router.post('/google_login',googleLogin)





export default router