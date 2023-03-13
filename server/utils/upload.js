import dotenv from 'dotenv';
import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';




dotenv.config();

const URL = process.env.URL;

const storage = new GridFsStorage({
    url: URL,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "application/pdf"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-description-${file.originalname}`;

        return {
            bucketName: "attachment",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});



const upload = multer({
    storage: storage,
    limits: {
        fileSize: 500000 // 500kb
    }
});

export default upload; 
