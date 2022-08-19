import destinationModel from '../Model/destinations.js'
import reviewModel from '../Model/review.js'
import userModel from '../Model/user.js'


const create = async (request, response, next) => {
  const { destinationId } = request.params
  const { body: newReview } = request
  const review = { ...newReview, destination: destinationId, createdBy: request.currentUser.id }
  try {
    const createdDocument = await reviewModel.create(review)
    const destinationToUpdate = await destinationModel.findById(destinationId)
    destinationToUpdate.reviews.push(createdDocument.id)

    await destinationToUpdate.save()
    const userToUpdate = await userModel.findById(request.currentUser.id)
    console.log(userToUpdate)
    console.log('user', userToUpdate)
    userToUpdate.reviews.push(createdDocument.id)

    return response.status(200).json(createdDocument)
  } catch (error) {
    next(error)
  }
}

const remove = async (request, response, next) => {
  const { reviewId } = request.params
  try {
    const deletedReview = await reviewModel.findByIdAndDelete(reviewId)
    if (!deletedReview) {
      return response.status(404).json( { message: `Review with ID ${reviewId} not found` } )
    }
    return response.status(200).json({ message: `Review with ID ${reviewId} has been deleted` })
  } catch (error) {
    next(error)
  }
}

const update = async (request, response, next) => {
  const { reviewId } = request.params
  const { body: updatedReview } = request
  console.log('current user', request.currentUser)
  console.log('Authenitcated user\'s role:', request.currentUser.role)
  try {
    const updatedDocument = await reviewModel.findByIdAndUpdate(reviewId, updatedReview, { new: true })
    if (!updatedDocument) {
      return response.status(400).json({ message: `Review with ID ${reviewId} could not be found` })
    }
    return response.status(200).json(updatedDocument)
  } catch (error) {
    next(error)
  }
}

export default { create, remove, update }