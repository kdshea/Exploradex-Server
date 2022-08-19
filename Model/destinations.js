import mongoose from 'mongoose'
// import reviewSchema from './review.js'

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  // continent: { type: String. required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  // reviews: [ reviewSchema ],
  reviews: [{ type: mongoose.Schema.ObjectId, ref: 'review' }],
})

const destinationModel = mongoose.model('destination', destinationSchema)

export default destinationModel