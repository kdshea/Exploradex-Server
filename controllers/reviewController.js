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

const create = async (request, response, next) => {
  const { destinationId } = request.params

  const { body: newReview } = request
  const review = { ...newReview, destination: destinationId, createdBy: request.currentUser.id }
  try {
    const createdDocument = await reviewModel.create(review)

    // Add new review ID to destination
    const destinationToUpdate = await destinationModel.findById(destinationId)
    if (!destinationToUpdate) {
      return response.status(400).json({ message: `Destination with ID ${destinationId} not found` })
    }
    destinationToUpdate.reviews.push(createdDocument.id)
    await destinationToUpdate.save()

    // Add new review ID to user
    const userToUpdate = await userModel.findById(request.currentUser.id)
    userToUpdate.reviews.push(createdDocument.id)
    await userToUpdate.save()

    return response.status(200).json(createdDocument)
  } catch (error) {
    next(error)
  }
}

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

    // Remove review ID from destination
    const destinationToUpdate = await destinationModel.findById(destinationId)
    if (!destinationToUpdate) {
      return response.status(400).json({ message: `Destination with ID ${destinationId} not found` })
    }
    destinationToUpdate.reviews = destinationToUpdate.reviews.filter(
      (review) => review.toString() !== reviewId
    )
    await destinationToUpdate.save()

    // Remove review ID from user
    const userToUpdate = await userModel.findById(request.currentUser.id)
    userToUpdate.reviews = userToUpdate.reviews.filter(
      (review) => review.toString() !== reviewId
    )
    await userToUpdate.save()

    const deletedReview = await reviewModel.findByIdAndDelete(reviewId)
    return response.status(200).json({ message: `Review with ID ${reviewId} has been deleted` })
  } catch (error) {
    next(error)
  }
}

const update = async (request, response, next) => {
  const { reviewId } = request.params
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