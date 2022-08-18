import express from 'express'


const router = express.Router()



router.route('/').get((request, response) => response.status(200).send('API is running'))

router.route('/travel')