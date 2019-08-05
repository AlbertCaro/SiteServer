export default {
  home: (req, res) => {
    res.status(200).json({
      message: 'SiteServer API'
    })
  },
  notFound: (req, res) => {
    res.status(404).json({
      sucess: false,
      message: 'La ruta especificada no existe.'
    })
  },
}