import { v2 as cloudinary } from 'cloudinary'
import vars from '@/config/vars'

// Konfigurasi cloudinary
cloudinary.config({
   cloud_name: vars.CLOUDINARY_NAME as string,
   api_key: vars.CLOUDINARY_API_KEY as string,
   api_secret: vars.CLOUDINARY_API_SECRET as string,
})

export default cloudinary
