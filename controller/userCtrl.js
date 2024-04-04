import { generateToken } from '../config/generatedToken.js';
import Users from '../models/userModel.js'
import bcrypt from 'bcrypt';


export const signupUser = async (req, res) => {
    try{
        const {first_name,last_name,email,password,avatar }=req.body
        const user=await Users.findOne({email})
        if(user) return res.status(400).json({status:'registered',msg:'Email is already Registered'})
        const hashPass=await bcrypt.hash(password,12)

        const registeredUser={
            first_name,
            last_name,
            email,
            password:hashPass,
            avatar
        }

        const newUser=new Users({...registeredUser})
        await newUser.save()

        
        res.status(200).json({
            success:true,
            msg:'User Created sucessfully',
            user:{...newUser._doc,password:''}
        })
    }catch(err){
        res.status(400).json({
            msg:err.message
        });
    }

}

export const signinUser=async (req,res)=>{
    try{
        const {email,password}=req.body
        const user=await Users.findOne({email})
        if(!user) return res.status(400).json({msg:'Invalid credentials'})

        const isMatch=await bcrypt.compare(password,user.password)
    
        if(!isMatch){
            return res.status(400).json({msg:"Invalid credentials"})
        }
   
        const token=generateToken({userId:user._id,email:user.email})
        res.status(200).json({
            success:true,
            msg:"Successfully Login",
            user:{...user._doc,password:''},
            token:token
        })
    }catch(err){
        return res.status(500).json({
            msg:err.message
        })
    }
}


export const googleLogin=async (req,res)=>{
    try{
        const {email,email_verified,given_name,family_name,picture}=req.body
        if(!email_verified)
            return res.status(500).json({msg: "Email verification failed."})
    
        const password = email + 'your google secrect password'
        const passwordHash = await bcrypt.hash(password, 12)
        const user = await Users.findOne({email: email})

        if(user){
            const isMatch=await bcrypt.compare(password,user.password)
    
            if(!isMatch){
                return res.status(400).json({msg:"This user is manually registered"})
            }
            const token=generateToken({userId:user._id,email:user.email})

            res.json({
                success:true,
                msg:"User is successfully Login",
                token:token,
                user:{...user._doc,password:''}
            })
        }else{
            const googleUser = {
                first_name:given_name, 
                last_name: family_name,
                email:email, 
                password: passwordHash, 
                avatar: picture,
                type: 'google'
              }

            const newUser=new Users({...googleUser})
            await newUser.save()

            const token=generateToken({userId:newUser._id,email:newUser.email})


            res.status(200).json({
                success:true,
                token:token,
                msg:'User Created Sucessfully',
                user:{...newUser._doc,password:''}
            })

        }
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
}


export const getUser = async (req, res) => {
    try {
        const user = await Users.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}