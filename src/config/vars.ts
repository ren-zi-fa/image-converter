import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export default {
   port: process.env.PORT,
   CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
   CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
   CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
}
