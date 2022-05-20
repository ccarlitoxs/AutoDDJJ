import express from 'express';
const router = new express.Router();

import {
  postDDJJPY,
  postDDJJArg1,
  downloadQRFolder,
  deleteQRs,
} from '../controllers/controller.js';
import validateData from '../middlewares/validateData.js';

router.post('/ddjjpy', validateData, postDDJJPY);
router.post('/ddjjarg1', validateData, postDDJJArg1);

router.get('/downloadqr', downloadQRFolder);

router.delete('/deleteqr', deleteQRs);

export default router;
