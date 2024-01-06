import express from 'express'
import { getUser, googleLogin, signinUser, signupUser } from '../controller/userCtrl.js'

const router=express.Router()



router.post('/signup',signupUser)
router.post('/signin',signinUser)
router.get('/all_users',getUser)
router.post('/google_login',googleLogin)





export default router