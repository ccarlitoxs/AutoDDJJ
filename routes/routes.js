import express from 'express';
const router = new express.Router();

import {
  postDDJJ,
  downloadQRFolder,
  deleteQRs,
} from '../controllers/controller.js';
import validateData from '../middlewares/validateData.js';

router.post('/ddjj', validateData, postDDJJ);

router.get('/downloadqr', downloadQRFolder);

router.delete('/deleteqr', deleteQRs);

export default router;
