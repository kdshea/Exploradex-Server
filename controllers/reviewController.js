import destinationModel from '../Model/destinations.js'
import reviewModel from '../Model/review.js'
import userModel from '../Model/user.js'

// ? END POINT TO GET ALL REVIEWS
const getAllReviews = async (request, response, next ) => {
  const allReviews = await reviewModel.find()
  return response.status(200).json(allReviews)
}

// ? END POINT TO GET INDIVIDUAL REVIEW
const individualReview = async (request, response, next) => {
  const { reviewId } = request.params
  const foundReview = await reviewModel.findById(reviewId)
  return response.status(200).json(foundReview)
}

// ? ENDPOINT TO CREATE A NEW REVIEW
const create = async (request, response, next) => {
  const { destinationId } = request.params
  const { body: newReview } = request
  let review = { ...newReview, destinationId: destinationId, createdBy: request.currentUser.id }
  try {
    const destinationToUpdate = await destinationModel.findById(destinationId)
    if (!destinationToUpdate) {
      return response.status(400).json({ message: `Destination with ID ${destinationId} not found` })
    }
    // Only allow 1 rating per destination
    destinationToUpdate.reviews.map((item) =>{
      if (item.createdBy.toString() === request.currentUser.id) {
        return response.status(403).json({ message: 'You already rated this destination' })
      }
    })
    // Creating new review from model
    const destinationName = destinationToUpdate.name
    review = { ...review, destinationName }
    const createdDocument = await reviewModel.create(review)
    // Changing _id key from created review to reviewId to append to the users and destinations
    const newReview = { ...createdDocument._doc }
    newReview.reviewId = newReview._id 
    delete newReview._id
    // Add new review to destination
    const addReviewToDestination = { ...newReview, displayName: request.currentUser.displayName }
    destinationToUpdate.reviews.push(addReviewToDestination)
    await destinationToUpdate.save()
    // Add new review to user
    const userToUpdate = await userModel.findById(request.currentUser.id)
    userToUpdate.reviews.push(newReview)
    await userToUpdate.save()

    return response.status(200).json(createdDocument)
  } catch (error) {
    next(error)
  }
}

// ? ENDPOINT TO REMOVE A REVIEW
const remove = async (request, response, next) => {
  const { reviewId, destinationId } = request.params
  const { id: userId } = request.currentUser
  try {
    const reviewToBeDeleted = await reviewModel.findById(reviewId)
    if (!reviewToBeDeleted) {
      return response.status(404).json( { message: `Review with ID ${reviewId} not found` } )
    }

    // Only user who made review or admin can remove
    if (reviewToBeDeleted.createdBy.toString() !== userId && request.currentUser.role !== 'admin') {
      return response.status(403).json({
        message: 'Forbdiden. Not admin or user who created this review',
      })
    }
    // Remove review from destination
    const destinationToUpdate = await destinationModel.findById(destinationId)
    if (!destinationToUpdate) {
      return response.status(400).json({ message: `Destination with ID ${destinationId} not found` })
    }
    destinationToUpdate.reviews = destinationToUpdate.reviews.filter(
      (review) => review.reviewId.toString() !== reviewId
    )
    await destinationToUpdate.save()
    // Remove review from user
    const userToUpdate = await userModel.findById(request.currentUser.id)
    if (!userToUpdate) {
      return response.status(400).json({ message: `User with ID ${userId} not found` })
    }
    userToUpdate.reviews = userToUpdate.reviews.filter(
      (review) => review.reviewId.toString() !== reviewId
    )
    await userToUpdate.save()
    // Remove review from database
    const deletedReview = await reviewModel.findByIdAndDelete(reviewId)
    if (!deletedReview) {
      return response.status(400).json({ message: `Review with ID ${reviewId} could not be found` })
    }
    return response.status(200).json({ message: `Review with ID ${reviewId} has been deleted` })
  } catch (error) {
    next(error)
  }
}

// ? ENDPOINT TO UPDATE A REVIEW
const update = async (request, response, next) => {
  const { destinationId, reviewId } = request.params
  const { body: updatedReview } = request
  const { id: userId } = request.currentUser
  try {
    const reviewToBeUpdated = await reviewModel.findById(reviewId)
    if (!reviewToBeUpdated) {
      return response.status(404).json( { message: `Review with ID ${reviewId} not found` } )
    }
    // Only user who made review or admin can remove
    if (reviewToBeUpdated.createdBy.toString() !== userId && request.currentUser.role !== 'admin') {
      return response.status(403).json({
        message: 'Forbdiden. Not admin or user who created this review',
      })
    }
    // Update review in destination 
    const destinationToUpdate = await destinationModel.findById(destinationId)
    if (!destinationToUpdate) {
      return response.status(400).json({ message: `Destination with ID ${destinationId} not found` })
    }
    destinationToUpdate.reviews = destinationToUpdate.reviews.map((item) => {
      if (item.reviewId.toString() === reviewId) {
        return { ...item, ...updatedReview }
      } else {
        return item
      }
    })
    await destinationToUpdate.save()
    // Update review in user
    const userToUpdate = await userModel.findById(request.currentUser.id)
    if (!userToUpdate) {
      return response.status(400).json({ message: `User with ID ${userId} not found` })
    }
    userToUpdate.reviews = userToUpdate.reviews.map((item) => {
      if (item.reviewId.toString() === reviewId) {
        return { ...item, ...updatedReview }
      } else {
        return item
      }
    })
    await userToUpdate.save()

    // Update review
    const updatedDocument = await reviewModel.findByIdAndUpdate(reviewId, updatedReview, { new: true })
    if (!updatedDocument) {
      return response.status(400).json({ message: `Review with ID ${reviewId} could not be found` })
    }
    return response.status(200).json({ message: `Review with ID ${reviewId} has been updated` })
  } catch (error) {
    next(error)
  }
}

export default { 
  getAllReviews,
  individualReview, 
  create, 
  remove, 
  update }