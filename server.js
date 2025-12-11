const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')

server.use(cors())           // enable ALL CORS requests
server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 5000
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server with CORS running at http://0.0.0.0:${PORT}`)
})
