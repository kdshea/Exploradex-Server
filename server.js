import express from 'express'
import mongoose from 'mongoose'
import connectToBd from './utilities/database.js'


const travelSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  rating: { type: String },

})

// ? Model - Travel test
const traveModel = mongoose.model('travel', travelSchema)


const PORT = 4000

const app = express()


// ! MIDDLEWARE
app.use((request, response, next) => {
  console.log(`incoming request: ${request.method} - ${request.url}`)
  next()
})

// !  healt check 
app.get('/', (request, response, next) => {
  return response.status(200).send('API is working. Health Check')
})


app.get('/travel', async (request, response, next) => {
  const allTravel = await traveModel.find()
  return response.status(200).json(allTravel)
})











const startServer = async () => {
  await connectToBd()
  console.log('Database Connection Successful')

  app.listen(PORT, () => {
    console.log(`Express server running on PORT ${PORT}`)
  })
}


startServer()
