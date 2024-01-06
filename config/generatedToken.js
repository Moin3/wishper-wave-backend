import jwt from 'jsonwebtoken'

export const generateToken=(payloda)=>{
    return jwt.sign(payloda,process.env.TOKEN_SECRET,{expiresIn:"3d"})
}

