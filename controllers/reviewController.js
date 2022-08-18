import reviewModel from '../Model/review.js'

const create = async (request, response, next) => {
  try {
    console.log(request.body)
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