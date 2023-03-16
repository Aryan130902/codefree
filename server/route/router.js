import express from 'express';
import { signupUser,loginUser } from '../controller/user-controller.js';
import { uploadFile, getFile } from '../controller/file-controller.js';
import { creatDescription,getAllDescription } from '../controller/description-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import upload from '../utils/upload.js';


const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/file/upload',upload.single('file'), uploadFile);
router.get('/file/:filename', getFile);
router.post('/create',authenticateToken, creatDescription);
router.get('/descriptions', authenticateToken, getAllDescription)
export default router