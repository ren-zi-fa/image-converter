import multer from 'multer'
import path from 'path'

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './uploads/')
   },
   filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
   },
})

// Filter untuk hanya mengizinkan file gambar jpg dan png
const fileFilter = (req: any, file: any, cb: any) => {
   const allowedFileTypes = ['.jpg', '.jpeg', '.png']
   const ext = path.extname(file.originalname).toLowerCase()

   if (allowedFileTypes.includes(ext)) {
      cb(null, true)
   } else {
      cb(
         new Error(
            'Format file tidak didukung. Hanya menerima JPG/JPEG dan PNG.',
         ),
         false,
      )
   }
}

// Inisialisasi multer dengan konfigurasi
const upload = multer({
   storage,
   limits: {
      fileSize: 5 * 1024 * 1024, // limit 5MB
   },
   fileFilter,
})

export default upload
