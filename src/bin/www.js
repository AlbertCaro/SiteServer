import app from "../app"
import mongoose from "mongoose"
import config from "../config"
import http from 'http'

const server = http.createServer(app)

server.on('listening', () => {
  const address = server.address()
  const bind = typeof address === 'string'
    ? 'address ' + address
    : 'port ' + address.port
  console.log('Escuchando en ' + bind)
})

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.log('MongoDB conectada correctamente.')
  server.listen(3000)
}).catch(error => {
  console.error('Error mongo: ', error)
})

