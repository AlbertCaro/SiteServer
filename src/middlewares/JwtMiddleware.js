import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token']

  if (token) {
    jwt.verify(token, req.app.get('secret'), (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Autenticación de token fallida'
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No se ha proporcionado el token'
    })
  }
}