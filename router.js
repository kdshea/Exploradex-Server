import express from 'express'
import userController from './controllers/userController.js'

const router = express.Router()



router.route('/').get((request, response) => response.status(200).send('API is running'))

router.route('/travel')

router.route('/register').post(userController.register)
router.route('/login').post(userController.login)

export default router