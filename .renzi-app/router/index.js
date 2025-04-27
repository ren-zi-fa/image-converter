'use strict'
var __importDefault =
   (this && this.__importDefault) ||
   function (mod) {
      return mod && mod.__esModule ? mod : { default: mod }
   }
Object.defineProperty(exports, '__esModule', { value: true })
exports.router = void 0
const express_1 = __importDefault(require('express'))
const parse_middleware_1 = require('@/middleware/parse.middleware')
const router = express_1.default.Router()
exports.router = router
router.post(
   '/create-person',
   parse_middleware_1.upload.single('photo'),
   (req, res) => {
      const { nama, umur, alamat } = req.body
      const fotoPath = req.file ? `/images/${req.file.filename}` : null
      res.send({
         message: 'Data received',
         data: { nama, umur, alamat, foto: fotoPath },
      })
   },
)
router.get('/hello/:nama', (req, res) => {
   const nama = req.params.nama
   res.send({ message: `hallo ${nama}` })
})
