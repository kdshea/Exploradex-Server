import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  rating: { type: String },
  createdAt: { type: Date, default: Date.now() },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'user', required: true },
})

export default mongoose.model('review', reviewSchema)