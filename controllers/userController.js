import userModel from '../Model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import CONSTS from './../consts.js'

// ? ENDPOINT TO REGISTER NEW USER
const register = async (req, res) => {
  const { body: newUser } = req

  const emailExists = await userModel.findOne({ email: newUser.email })
  if (emailExists) {
    return res.status(400).json({ message: 'User with this email address already exists' })
  }
  const userNameExists = await userModel.findOne({ userName: newUser.userName })

  if (userNameExists) {
    return res.status(400).json({ message: 'User with this username already exists' })
  }
  if (newUser.password !== newUser.confirmPassword) {
    return res.status(400).json({ message: 'Passwords don\'t match' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(newUser.password, salt)
  const createdUser = await userModel.create({
    ...newUser,
    password: hashedPassword,
  })
  return res.status(200).json({ createdUser })
}

// ? ENDPOINT TO LOGIN
const login = async (req, res, next) => {
  const { userName, password } = req.body
  
  try {
    const user = await userModel.findOne({ userName })
    const id = user._id
    if (!user) {
      return res.status(400).json({ messages: 'Invalid credentials' })
    }

    const passwordsMatch = await bcrypt.compare(password, user.password)
    if (!passwordsMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const payload = {
      userName: user.userName,
      email: user.email,
      id: user._id,
    }

    const opts = {
      expiresIn: '2 days',
    }
    
    const token = jwt.sign(payload, CONSTS.JWT_SECRET, opts)
    console.log('token', token)
    const decodedToken = jwt.verify(token, CONSTS.JWT_SECRET)
    console.log('decoded token', decodedToken)

    return res.status(200).json({ token, id })
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