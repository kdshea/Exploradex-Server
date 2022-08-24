import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  displayName: String,
  profileImg: String,
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  aboutMeText: String,
  reviews: [ {
    reviewText: { type: String, required: true },
    rating: { type: Number },
    activities: [{ type: String, required: true }],
    destinationId: { type: mongoose.Schema.ObjectId, ref: 'destination', required: true },
    destinationName: String,
    reviewImgUrl: [{ type: String }],
    reviewId: {  type: mongoose.Schema.ObjectId, ref: 'review', required: true },
  } ],
})

export default mongoose.model('user', userSchema)