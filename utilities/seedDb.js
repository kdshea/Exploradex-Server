import connectToDb from './database.js'

import mongoose from 'mongoose'

import seedingData from './seedingData.js'

import destinationModel from '../Model/countries.js'

const seed = async () => {

  await connectToDb()
  console.log('Database connect')

  await mongoose.connection.db.dropDatabase()

  const dbCountries = await destinationModel.create(seedingData)

  console.log(`${dbCountries.length} countries have been created sucessfully in the database`)

  console.log(`Going to disconnect from db ${mongoose.connection.name}`)
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
  }

  console.log('All done. Database has been reset')

}

seed()