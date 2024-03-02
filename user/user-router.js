import { Router } from 'express';
const router = Router();

import { login, registration, getUser} from '../controllers/auth-controller.js';

router.post('/login', login);

router.post('/registration', registration);

router.get('/:email', getUser)

export default router;