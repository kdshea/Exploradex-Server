import userModel from '../Model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import CONSTS from './../consts.js'

// ? ENDPOINT TO REGISTER NEW USER
const register = async (request, response) => {
  const { body: newUser } = request

  const emailExists = await userModel.findOne({ email: newUser.email })
  if (emailExists) {
    return response.status(400).json({ message: 'User with this email address already exists' })
  }
  const userNameExists = await userModel.findOne({ userName: newUser.userName })

  if (userNameExists) {
    return response.status(400).json({ message: 'User with this username already exists' })
  }
  if (newUser.password !== newUser.confirmPassword) {
    return response.status(400).json({ message: 'Passwords don\'t match' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(newUser.password, salt)
  const createdUser = await userModel.create({
    ...newUser,
    password: hashedPassword,
  })
  return response.status(200).json({ createdUser })
}

// ? ENDPOINT TO LOGIN
const login = async (request, response, next) => {
  const { userName, password } = request.body
  
  try {
    const user = await userModel.findOne({ userName })
    if (!user) {
      return response.status(400).json({ messages: 'Invalid credentials' })
    }
    const userId = user._id
    const passwordsMatch = await bcrypt.compare(password, user.password)
    if (!passwordsMatch) {
      return response.status(400).json({ message: 'Invalid credentials' })
    }

    const payload = {
      userName: user.userName,
      email: user.email,
      userId: user._id.toString(),
    }

    const opts = {
      expiresIn: '2 days',
    }
    
    const token = jwt.sign(payload, CONSTS.JWT_SECRET, opts)
    console.log('token', token)
    const decodedToken = jwt.verify(token, CONSTS.JWT_SECRET)
    console.log('decoded token', decodedToken)

    return response.status(200).json({ token, userId })
  } catch (error) {
    next(error)
  }
}

const getAll = async (request, response, next ) => {
  if (request.currentUser.role !== 'admin') {
    return response.status(403).json({ message: 'Only admins can remove destinations' })
  }
  const allUsers = await userModel.find()
  return response.status(200).json(allUsers)
}

const individualUser = async (request, response, next) => {
  console.log('current user', request.currentUser)
  const { userId } = request.params
  const foundUser = await userModel.findById(userId)
  return response.status(200).json(foundUser)
}


export default { 
  register, 
  login,
  getAll,
  individualUser,
}