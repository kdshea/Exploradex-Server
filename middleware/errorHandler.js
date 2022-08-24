const errorHandler = (error, request, response, next) => {

  console.log(`Server side error: >>>>>> ${error}`)
  console.log(`Name of the error: ${error.name}`)

  if (error.name === 'CastError') {
    return response.status(400).json({ message: 'Invalid Object ID' })
  }
  
  if (error.name === 'JsonWebTokenError') {
    return response.status(400).json({ message: 'Invalid JsonWebToken' })
  }

  return response.status(500).json({ messsage: 'Something went wrong' })
}

export default errorHandler