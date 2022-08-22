import jwt from 'jsonwebtoken'
import userModel from '../Model/user.js'
import CONSTS from '../consts.js'

const auth = async (req, res, next) => {
  const rawToken = req.headers.authorization

  if (!rawToken) {
    return res.status(400).json({ message: 'Unauthorized - No token provided' })
  }
  const token = rawToken.split(' ')[1]
  try {

    const decodedToken = jwt.verify(token, CONSTS.JWT_SECRET)
    const authUser = await userModel.findOne({ userName: decodedToken.userName })

    if (!authUser) {
      return res.status(401).json({ message: 'Token affiliated to user does not exist anymore' })
    }
  
    req.currentUser = authUser
    next()
  } catch (error) {
    next(error)
  }
}

export default auth