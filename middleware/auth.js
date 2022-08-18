import jwt from 'jsonwebtoken'
import userModel from '../models/user.js'
// ! import consts when we've created .env file
// import CONSTS from '../consts.js'

const auth = async (req, res, next) => {
  const rawToken = req.headers.authorization

  if (!rawToken) {
    return res.status(400).json({ message: 'Unauthorized - No token provided' })
  }
  
  const token = rawToken.split(' ')[1]
  console.log('token', token)
  try {
    // ! Change 'test' to CONSTS.JWT_SECRET when we've created .env file
    const decodedToken = jwt.verify(token, 'test')
    console.log('decoded token', decodedToken)
    const authUser = await userModel.findOne({ userName: decodedToken.userName })

    if (!authUser) {
      return res.status(401).json({ message: 'Token affiliated to user does not exist anymore' })
    }
  
    req.currentUser = authUser
    console.log('authUser', authUser)
    next()
  } catch (error) {
    next(error)
  }
}

export default auth