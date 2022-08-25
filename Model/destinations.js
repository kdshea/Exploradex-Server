import mongoose from 'mongoose'
// import reviewSchema from './review.js'

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  // continent: { type: String. required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: [ {
    destinationId: {  type: mongoose.Schema.ObjectId, ref: 'destination', required: true },
    reviewText: { type: String, required: true },
    rating: { type: Number },
    activities: [{ type: String, required: true }],
    reviewImgUrl: [{ type: String }],
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'user', required: true },
    displayName: String,
    reviewId: {  type: mongoose.Schema.ObjectId, ref: 'review', required: true },
  } ],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'user', required: true },
  imgUrl: [{ type: String }],
})

const destinationModel = mongoose.model('destination', destinationSchema)

export default destinationModel