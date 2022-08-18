import express from 'express'

import connectToDb from './utilities/database.js'





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
