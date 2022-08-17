import mongoose from 'mongoose'


const travelSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  rating: { type: String },

})

// ? Model - Travel test
const traveModel = mongoose.model('travel', travelSchema)

export default traveModel