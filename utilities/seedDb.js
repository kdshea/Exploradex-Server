import connectToBd from './database.js'

import mongoose from 'mongoose'

import seedingData from './seedingData.js'

import traveModel from '../Model/countries.js'

const seed = async () => {

  await connectToBd()
  console.log('Database connect')

  mongoose.connection.db.dropCollection()

  const dbCountries = await traveModel.create(seedingData)

  console.log(`${dbCountries.length} countries have been created sucessfully in the database`)

  console.log(`Going to disconnect from db ${mongoose.connection.name}`)
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
  }

  console.log('All done. Database has been reset')

}

seed()