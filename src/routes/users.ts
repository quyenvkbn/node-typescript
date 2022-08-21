import express from 'express';
import UserController from '../app/controllers/user.controller'

const router = express.Router();

router.use('/', UserController.index)
export default router