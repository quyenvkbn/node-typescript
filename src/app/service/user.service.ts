import UserRepository from '@/app/repositories/user.repository';

class UserService{
    async getAll(): Promise<any|undefined>
    {
        let users = await UserRepository.getAll();
        if(users.isSuccess){
            return users.getValue();
        }
        return {};
    }
}

export default new UserService;