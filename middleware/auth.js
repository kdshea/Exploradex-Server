import jwt from 'jsonwebtoken'
import userModel from '../Model/user.js'
import CONSTS from '../consts.js'

const auth = async (request, response, next) => {
  const rawToken = request.headers.authorization

  if (!rawToken) {
    return response.status(400).json({ message: 'Unauthorized - No token provided' })
  }
  const token = rawToken.split(' ')[1]
  try {

    const decodedToken = jwt.verify(token, CONSTS.JWT_SECRET)
    const authUser = await userModel.findOne({ userName: decodedToken.userName })
    if (!authUser) {
      return response.status(401).json({ message: 'Token affiliated to user does not exist anymore' })
    }
    // console.log('decoded token', decodedToken)
    request.currentUser = authUser
    next()
  } catch (error) {
    next(error)
  }
}

export default auth