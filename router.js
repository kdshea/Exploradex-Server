import express from 'express'
import destinationController from './controllers/destinationController.js'
import userController from './controllers/userController.js'

const router = express.Router()



router.route('/').get((request, response) => response.status(200).send('API is running'))

router.route('/travel').get(destinationController.getAllDestination)

router.route('/travel/:id').get(destinationController.individualDestination).put(destinationController.addDestination)


router.route('/register').post(userController.register)
router.route('/login').post(userController.login)

export default router