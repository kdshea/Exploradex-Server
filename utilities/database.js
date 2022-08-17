import mongoose from 'mongoose'

const connectToBd = async () => {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  return mongoose.connect('mongodb://localhost:27017', opts)
}


export default connectToBd