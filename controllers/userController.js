import UserModel from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// ! import consts when we've created .env file
// import CONSTS from './../consts.js'


const register = async (req, res) => {
  const { body: newUser } = req
  console.log('newUser', newUser)

  const emailExists = await UserModel.findOne({ email: newUser.email })
  if (emailExists) {
    return res.status(400).json({ message: 'User with this email address already exists' })
  }
  const userNameExists = await UserModel.findOne({ userName: newUser.userName })

  if (userNameExists) {
    return res.status(400).json({ message: 'User with this username already exists' })
  }
  if (newUser.password !== newUser.confirmPassword) {
    return res.status(400).json({ message: 'Passwords don\'t match' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(newUser.password, salt)
  const createdUser = await UserModel.create({
    ...newUser,
    password: hashedPassword,
  })
  return res.status(200).json({ createdUser })
}

const login = async (req, res, next) => {
  const { userName, password } = req.body
  
  try {
    const user = await UserModel.findOne({ userName })

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
    }

    const opts = {
      expiresIn: '2 days',
    }
    
    // ! We need to set up the environment variables, then change 'test' to CONSTS.JWT_SECRET
    const token = jwt.sign(payload, 'test', opts)
    console.log('payload', payload)
    console.log('token', token)
    return res.status(200).json({ token })
  } catch (error) {
    next(error)
  }
}

export default { register, login }