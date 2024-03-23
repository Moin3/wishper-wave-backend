import express from 'express'
import { getUser, googleLogin, signinUser, signupUser } from '../controller/userCtrl.js'
import { getConversation, newConversation } from '../controller/conversationCtrl.js'
import { getMessage, newMessage } from '../controller/msgCtrl.js'
import {  uploadFile } from '../controller/imageCtrl.js'
import upload from '../middleware/upload.js'

const router=express.Router()


/* ------------------------------- Auth route ------------------------------- */
router.post('/signup',signupUser)
router.post('/signin',signinUser)
router.get('/all_users',getUser)
router.post('/google_login',googleLogin)

/* --------------------------- Conversation route --------------------------- */
router.post('/conversation/add', newConversation);
router.post('/conversation/get', getConversation);

/* --------------------------- Conversation route --------------------------- */
router.post('/message/add', newMessage);
router.get('/message/get/:id', getMessage);

router.post('/file/upload',upload.single('file'), uploadFile);




export default router