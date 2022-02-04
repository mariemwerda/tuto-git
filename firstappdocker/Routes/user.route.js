import express from 'express';
import { createUser, getuserBYEmail } from '../Controllers/users.js';
const router = express.Router();
router.post('/', createUser);

router.post('/login', getuserBYEmail);
export default router;