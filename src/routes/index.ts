import UserRouter from './users';
import { Express } from 'express';

export default function routers(app: Express){
    app.use('/users', UserRouter)
}