import { Request, Response } from 'express';
import UserService from '@/app/service/user.service';

class UserController{
    async index(req: Request, res: Response){
        let result = await UserService.getAll();
        return res.render('users/index.hbs', {
            data: result
        });
    }
}
export default new UserController;