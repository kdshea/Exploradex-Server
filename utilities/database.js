import mongoose from 'mongoose'

const connectToDb = async () => {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // ! To change database name add to end of database url ex: mongodb://localhost:27017/destinations
  // ! Change to CONSTS.DB_CONNECTION_STRING when we have a deployed database url in .env
  return mongoose.connect('mongodb://localhost:27017/', opts)
}


export default connectToDb