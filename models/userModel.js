import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please add your name"],
    trim: true,
    maxLength: [20, "Your name is up to 20 chars long."]
  },
  last_name: {
    type: String,
    required: [true, "Please add your name"],
    trim: true,
    maxLength: [20, "Your name is up to 20 chars long."]
  },
  email: {
    type: String,
    required: [true, "Please add your email or phone"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please add your password"]
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/richblogcloud/image/upload/v1677128588/profile.png'
  },
  type: {
    type: String,
    default: 'register' // login
  },
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)