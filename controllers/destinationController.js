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
  console.log('new destination', newDestination)
  try {
    const createdDocument = await destinationModel.create(newDestination)
    return response.status(200).json(createdDocument)
  } catch (error) {
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
  const { body: updatedDestination } = request.params
  try {
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