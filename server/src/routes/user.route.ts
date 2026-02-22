import express from 'express';
import { usersController } from '../controllers/user.controller.ts';

const router = express.Router();
router.post("/", usersController)


export default router