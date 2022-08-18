import express from 'express'
import destinationController from './controllers/destinationController'


const router = express.Router()



router.route('/').get((request, response) => response.status(200).send('API is running'))

router.route('/travel').get(destinationController.getAllDestination)

router.route('/travel/:id').get(destinationController.individualDestination).put(destinationController.addDestination)






export default router