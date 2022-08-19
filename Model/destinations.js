import mongoose from 'mongoose'


const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  // continent: { type: String. required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: [{ type: mongoose.Schema.ObjectId, ref: 'review' }],
})

// ? Model - Travel test
const destinationModel = mongoose.model('destination', destinationSchema)

export default destinationModel