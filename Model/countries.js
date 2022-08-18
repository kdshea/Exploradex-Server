import mongoose from 'mongoose'


const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  rating: { type: String },

})

// ? Model - Travel test
const destinationModel = mongoose.model('destination', destinationSchema)

export default destinationModel