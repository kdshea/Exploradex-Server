
const logger = (request, response, next) => {
  console.log(`incoming request: method-${request.method} url-${request.url}`)
  next()
}

export default logger