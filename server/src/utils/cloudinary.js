import {v2} from "cloudinary";

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (! localFilePath ) return null;
        const response =  await v2.uploader.upload(localFilePath, {
        format : "auto"
    });
    console.log(`File is Successfully uploaded on Cloudinary ...
        ${response.url}`);
        return response; 
    } catch (err) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnCloudinary } ;
