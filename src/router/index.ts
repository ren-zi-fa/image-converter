import { uploadToCloudinary } from '@/middleware/cloudinary.middleware'
import upload from '@/middleware/multer.middleware'
import { Router } from 'express'

const router = Router()
router.post(
   '/upload',
   upload.single('image'),
   uploadToCloudinary,
   async (req: any, res: any) => {
      if (!req.body.imageUrl) {
         return res.status(400).json({
            success: false,
            message: 'Tidak ada file yang diupload',
         })
      }

      return res.status(200).json({
         success: true,
         message: 'Gambar berhasil dikonversi ke WebP dan diupload',
         data: {
            imageUrl: req.body.imageUrl,
            cloudinaryId: req.body.cloudinaryId,
         },
      })
   },
)

export { router }
