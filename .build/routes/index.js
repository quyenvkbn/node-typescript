import UserRouter from './users';
export default function routers(app) {
    app.use('/users', UserRouter);
}
