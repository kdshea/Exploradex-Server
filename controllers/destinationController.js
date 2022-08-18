import destinationModel from '../Model/destinations.js'



// ? END POINT TO GET ALL COUNTRIES

const getAllDestination = async (request, response ) => {
  const allCountries = await destinationModel.find()
  return response.status(200).json(allCountries)
}


// ? END POINT TO GET INDIVIDUAL COUNTRY

const individualDestination = async (request, response, next) => {
  const { countryId } = request.params
  console.log('id', countryId)
  const foundCountry = await destinationModel.findById(countryId)
  console.log('country', foundCountry)
  return response.status(200).json(foundCountry)
}


// ? END POINT TO ADD A COUNTRY
const addDestination = async (request, response) => {
  const { body: newCountry } = request
  console.log('newCountry', newCountry)
  try {
    const createdDocument = await destinationModel.create(newCountry)
    return response.status(200).json(createdDocument)
  } catch (error) {
    return response.status(500).json({ messages: 'Something went wrong', error })
  }
}


export default {
  getAllDestination,
  individualDestination,
  addDestination,

}