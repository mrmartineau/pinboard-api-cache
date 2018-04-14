const axios = require('axios')
const cache = require('micro-cacheable')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })
const API = 'https://pinboard-api.now.sh'

const microFn = async (req, res) => {
  const params = req.url
  const path = `${API}${params}`
  const response = await axios(path)
  return response.data
}

module.exports = cache(60 * 60 * 1000, cors(microFn)) // One hour data caching
