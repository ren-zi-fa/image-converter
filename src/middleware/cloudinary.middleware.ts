import cloudinary from '@/config/cloudinary'
import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

const uploadToCloudinary = async (
   req: Request,
   res: Response,
   next: NextFunction,
): Promise<void> => {
   try {
      // Jika tidak ada file terupload, lanjut ke middleware berikutnya
      if (!req.file) {
         return next()
      }

      // Upload ke cloudinary (misal menggunakan cloudinary SDK)
      const result = await cloudinary.uploader.upload(req.file.path, {
         folder: 'converted_images',
         format: 'webp',
         transformation: [{ quality: 'auto:good' }],
      })

      // Hapus file lokal setelah berhasil upload ke cloudinary
      fs.unlinkSync(req.file.path)

      // Tambahkan hasil upload cloudinary ke req.body
      req.body.imageUrl = result.secure_url
      req.body.cloudinaryId = result.public_id

      // Lanjutkan ke middleware berikutnya
      next()
   } catch (error) {
      // Hapus file lokal jika terjadi error saat upload ke cloudinary
      if (req.file && req.file.path) {
         fs.unlinkSync(req.file.path)
      }
   }
}

export { uploadToCloudinary }
