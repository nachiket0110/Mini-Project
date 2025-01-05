const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const multer = require('multer');
const dotenv = require('dotenv')

dotenv.config()

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
   cloudinary: cloudinary,
  params: {
    folder: 'ProjM',
    allowed_formats:  ['png','jpeg','jpg'], // supports promises as well
    // public_id: (req, file) => 'computed-filename-using-request',
  },
});
module.exports = {cloudinary,storage}