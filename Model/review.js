import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'user', required: true },
  destination: { type: mongoose.Schema.ObjectId, ref: 'destination', required: true },
})

export default mongoose.model('review', reviewSchema)