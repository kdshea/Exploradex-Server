import express from 'express'
import destinationController from './controllers/destinationController.js'
import userController from './controllers/userController.js'
import reviewController from './controllers/reviewController.js'
import auth from './middleware/auth.js'

const router = express.Router()

router.route('/').get((request, response) => response.status(200).send('API is running'))

router
  .route('/travel')
  .get(destinationController.getAllDestination)
  .post(auth, destinationController.addDestination)

router
  .route('/travel/reviews')
  .get(reviewController.getAllReviews)

router
  .route('/travel/:destinationId')
  .get(destinationController.individualDestination)
  .delete(auth, destinationController.remove)
  .put(auth, destinationController.update)
  .post(auth, reviewController.create)

router
  .route('/travel/:destinationId/:reviewId')
  .get(reviewController.individualReview)
  .delete(auth, reviewController.remove)
  .put(auth, reviewController.update)

router.route('/register').post(userController.register)
router.route('/login').post(userController.login)
router.route('/users').get(auth, userController.getAll)

router
  .route('/users/:userId')
  .get(auth, userController.individualUser)
  .put(auth, userController.update)


export default router