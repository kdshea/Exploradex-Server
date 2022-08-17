import connectToBd from './database.js'

import mongoose from 'mongoose'

const seed = async () => {

  await connectToBd()
  console.log('Database connect')

  await mongoose.connection.db.dropCollection()








}

seed()