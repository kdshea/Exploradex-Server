import destinationModel from '../Model/destinations.js'


// ? END POINT TO GET ALL DESTINATIONS
const getAllDestination = async (request, response ) => {
  const allDestinations = await destinationModel.find()
  return response.status(200).json(allDestinations)
}

// ? END POINT TO GET INDIVIDUAL DESTINATION
const individualDestination = async (request, response, next) => {
  const { destinationId } = request.params
  console.log('id', destinationId)
  const foundDestination = await destinationModel.findById(destinationId)
  console.log('destination', foundDestination)
  return response.status(200).json(foundDestination)
}

// ? END POINT TO ADD A DESTINATION
const addDestination = async (request, response) => {
  const { body: newDestination } = request
  const destination = { ...newDestination, createdBy: request.currentUser.id }
  console.log('new destination', destination)
  try {
    const createdDocument = await destinationModel.create(destination)
    return response.status(200).json(createdDocument)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ messages: 'Something went wrong', error })
  }
}

// ? END POINT TO DELETE A DESTINATION
const remove = async (request, response, next) => {
  const { destinationId } = request.params
  try {
    if (request.currentUser.role !== 'admin') {
      return response.status(403).json({ message: 'Only admins can remove destinations' })
    }
    // Delete destination
    const deletedDestination = await destinationModel.findByIdAndDelete(destinationId)
    if (!deletedDestination) {
      return response.status(404).json( { message: `Destination with ID ${destinationId} not found` } )
    }
    return response.status(200).json({ message: `Destination with ID ${destinationId} has been deleted` })
  } catch (error) {
    next(error)
  }
}

// ? END POINT TO UPDATE A DESTINATION
const update = async (request, response, next) => {
  const { destinationId } = request.params
  const { body: updatedDestination } = request
  const { id: userId } = request.currentUser
  console.log('updated destination', updatedDestination)
  try {
    const destinationToBeUpdated = await destinationModel.findById(destinationId)
    if (!destinationToBeUpdated) {
      return response.status(404).json( { message: `Destination with ID ${destinationId} not found` } )
    }
    console.log('createdBy', destinationToBeUpdated.createdBy.toString())
    console.log('userID', userId)
    if (destinationToBeUpdated.createdBy.toString() !== userId && request.currentUser.role !== 'admin') {
      return response.status(403).json({
        message: 'Forbdiden. Not admin or user who created this destination',
      })
    }
    const updatedDocument = await destinationModel.findByIdAndUpdate(destinationId, updatedDestination, { new: true })
    console.log('updated document', updatedDocument)
    if (!updatedDocument) {
      return response.status(404).json( { message: `Destination with ID ${destinationId} not found` } )
    }
    return response.status(200).json(updatedDocument)
  } catch (error) {
    next(error)
  }
}


export default {
  getAllDestination,
  individualDestination,
  addDestination,
  remove,
  update,
}