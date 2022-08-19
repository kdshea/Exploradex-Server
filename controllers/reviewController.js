// import destinationModel from '../Model/destinations.js'
import reviewModel from '../Model/review.js'


const create = async (request, response) => {
  // const { destinationID } = request.params
  const { body: newReview } = request
  console.log('new review', newReview)
  try {
    // const destination = await destinationModel.findById(destinationId)
    const createdDocument = await reviewModel.create(newReview)
    console.log('created doc', createdDocument)
    return response.status(200).json(createdDocument)
  } catch (error) {
    error
  }
}


const remove = async (request, response, next) => {
  try {
    console.log(request.body)
  } catch (error) {
    error
  }
}

const update = async (request, response, next) => {
  try {
    console.log(request.body)
  } catch (error) {
    error
  }
}

export default { create, remove, update }