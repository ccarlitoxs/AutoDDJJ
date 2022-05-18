import express from 'express';
const router = new express.Router();

import { readDNIQR } from '../controllers/controller.js';
// import {  } from '../utils/functions/middlewares.js';

router.get('/read',
    readDNIQR
);

export default router;