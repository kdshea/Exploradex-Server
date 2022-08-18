import express, { request } from 'express'
import travelModel from './Model/countries.js'
import userModel from './Model/user.js'
import connectToDb from './utilities/database.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const PORT = 4000

const app = express()


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
    const createdDocument = await travelModel.create(newCountry)
    return response.status(200).json(createdDocument)
  } catch (error) {
    return response.status(500).json({ messages: 'Something went wrong', error })
  }

})

// ? REGISTER

app.post('/register', async(request, response) => {
  const { body: newUser } = request
  console.log('newUser', newUser)

  const emailExists = await userModel.findOne({ email: newUser.email })
  if (emailExists) {
    return response.status(400).json({ message: 'User with this email address already exists' })
  }

  const userNameExists = await userModel.findOne({ userName: newUser.userName })
  console.log('userNameExists', userNameExists)

  if (userNameExists) {
    return response.status(400).json({ message: 'User with this username already exists' })
  }
  if (newUser.password !== newUser.confirmPassword) {
    return response.status(400).json({ message: 'Passwords don\'t match' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(newUser.password, salt)
  const createdUser = await userModel.create({
    ...newUser,
    password: hashedPassword,
  })
  return response.status(200).json({ createdUser })
})

// ? LOGIN





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
