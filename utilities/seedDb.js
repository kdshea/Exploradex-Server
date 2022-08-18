import connectToDb from './database.js'

import mongoose from 'mongoose'

import seedingData from './seedingData.js'

import travelModel from '../Model/countries.js'

const seed = async () => {

  await connectToDb()
  console.log('Database connect')

  mongoose.connection.db.dropCollection()

  const dbCountries = await travelModel.create(seedingData)

  console.log(`${dbCountries.length} countries have been created sucessfully in the database`)

  console.log(`Going to disconnect from db ${mongoose.connection.name}`)
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
  }

  console.log('All done. Database has been reset')

}

seed()