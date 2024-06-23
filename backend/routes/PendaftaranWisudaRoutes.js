import express from 'express';
import { daftarWisuda } from '../controllers/PendaftaranWisuda.js';

const router = express.Router();

router.post('/pendaftaran-wisuda', daftarWisuda);

export default router;
