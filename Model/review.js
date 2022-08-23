import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  reviewText: { type: String, required: true },
  rating: { type: Number },
  activities: [{ type: String, required: true }],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'user', required: true },
  destinationId: { type: mongoose.Schema.ObjectId, ref: 'destination', required: true },
  destinationName: String,
  reviewImgUrl: [{ type: String }],
})

export default mongoose.model('review', reviewSchema)