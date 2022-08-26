import userModel from '../Model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import CONSTS from './../consts.js'
import destinationModel from '../Model/destinations.js'

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
    profileImg: 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-profile-avatar.jpg',
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
    console.log('user', user)
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

// ? ENDPOINT TO GET ALL USERS
const getAll = async (request, response, next ) => {
  if (request.currentUser.role !== 'admin') {
    return response.status(403).json({ message: 'Only admins can access all user profiles' })
  }
  const allUsers = await userModel.find()
  return response.status(200).json(allUsers)
}

// ? ENDPOINT TO GET AN INDIVIDUAL USER
const individualUser = async (request, response, next) => {
  console.log('current user', request.currentUser)
  const { userId } = request.params
  const foundUser = await userModel.findById(userId)
  return response.status(200).json(foundUser)
}

// ? ENDPOINT TO UPDATE A USER
const update = async (request, response, next) => {
  const { userId: userIdParam } = request.params
  const { body: updatedUser } = request
  const { id: userId } = request.currentUser
  try {
    const userToBeUpdated = await userModel.findById(userId)
    if (!userToBeUpdated) {
      return response.status(404).json( { message: `User with ID ${userId} not found` } )
    }
    // Only user or admin can update
    if (userIdParam.toString() !== userId.toString()) {
      return response.status(401).json({
        message: 'Unauthorized',
      })
    }

    // Update display name on user's reviews in destination
    // if (updatedUser.displayName !== userToBeUpdated.displayName) {
    //   console.log('name changed')
    //   const destinationToUpdate = await destinationModel.find({ reviews.createdBy: userId})
    // Need to map through the items returned above using the code below
    //   destinationToUpdate.reviews = destinationToUpdate.reviews.map((item) => {
    //     if (userId.toString() === item.createdBy.toString() ) {
    //       console.log('inside user id to string ===')
    //       item.displayName = updatedUser.displayName
    //     }
    //   })
    //   await destinationToUpdate.save()
    // }

    // Update user
    const updatedDocument = await userModel.findByIdAndUpdate(userId, updatedUser, { new: true })
    if (!updatedDocument) {
      return response.status(400).json({ message: `User with ID ${userId} could not be found` })
    }
    return response.status(200).json({ message: `User with ID ${userId} has been updated` })
  } catch (error) {
    next(error)
  }
}

export default { 
  register, 
  login,
  getAll,
  individualUser,
  update,
}