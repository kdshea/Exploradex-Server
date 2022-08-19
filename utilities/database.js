import mongoose from 'mongoose'
import CONSTS from '../consts.js'

const connectToDb = async () => {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // ! To change database name add to end of database url ex: mongodb://localhost:27017/destinations
  return mongoose.connect(CONSTS.DB_CONNECTION_STRING, opts)
}


export default connectToDb