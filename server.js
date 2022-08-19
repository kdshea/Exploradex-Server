import express from 'express'
import connectToDb from './utilities/database.js'
import logger from './middleware/logger.js'
import router from './router.js'
import errorHandler from './middleware/errorHandler.js'
import CONSTS from './consts.js'
import cors from 'cors'
import dotenv from 'dotenv'




async function startServer() {
  const app = express()

  dotenv.config()

  // Use middleware to allow CORS
  app.use(cors())

  app.use(express.json())

  // ! MIDDLEWARE
  app.use(logger)
  app.use(router)
  app.use(errorHandler)


  // ? MAKING AN END POINT TO SEE IF THE SERVER WORKS 
  app.use((request, response) => {
    return response.status(404).send('404 - required endpoint!')
  })

  await connectToDb()
  console.log('Database Connection Successful')

  app.listen(CONSTS.PORT, () => {
    console.log(`Express server running on PORT ${CONSTS.PORT}`)
  })

}

startServer()
