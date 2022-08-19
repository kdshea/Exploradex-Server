import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  createdAt: { type: Date, default: Date.now() },
  fullName: String,
  mobile: String,
  aboutMeText: String,
  reviews: [{ type: mongoose.Schema.ObjectId, ref: 'review' }],
})

export default mongoose.model('user', userSchema)