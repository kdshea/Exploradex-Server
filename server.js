import express from 'express'
import destinationModel from './Model/destinations.js'
import connectToDb from './utilities/database.js'
import router from './router.js'

const PORT = 4000

const app = express()
app.use(express.json())

// ! MIDDLEWARE
app.use((request, response, next) => {
  console.log(`incoming request: ${request.method} - ${request.url}`)
  next()
})

// !  health check 
app.get('/', (request, response, next) => {
  return response.status(200).send('API is working. Health Check')
})

// ? END POINT TO GET ALL COUNTRIES
app.get('/countries', async (request, response) => {
  const allCountries = await travelModel.find()
  return response.status(200).json(allCountries)
})

// ? END POINT TO GET INDIVIDUAL COUNTRY
app.get('/countries/:countryId', async (request, response, next) => {
  const { countryId } = request.params
  console.log('id', countryId)
  const foundCountry = await travelModel.findById(countryId)
  console.log('country', foundCountry)
  return response.status(200).json(foundCountry)
})


// ? END POINT TO ADD A COUNTRY
app.put('/countries', async (request, response) => {

  const { body: newCountry } = request
  console.log('newCountry', newCountry)
  try {
    const createdDocument = await destinationModel.create(newCountry)
    return response.status(200).json(createdDocument)
  } catch (error) {
    return response.status(500).json({ messages: 'Something went wrong', error })
  }

})




// ? MAKING AN END POINT TO SEE IF THE SERVER WORKS 
app.use((request, response) => {
  return response.status(404).send('404 - required endpoint!')
})

const startServer = async () => {
  await connectToDb()
  console.log('Database Connection Successful')

  app.listen(PORT, () => {
    console.log(`Express server running on PORT ${PORT}`)
  })
}


startServer()
