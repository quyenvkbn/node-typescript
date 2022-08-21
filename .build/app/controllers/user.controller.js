import UserRepository from '../repositories/user.repository';
class UserController {
    async index(req, res) {
        let users = await UserRepository.getAll();
        if (users.isSuccess) {
            return res.send(JSON.stringify(users.getValue(), null, 2));
        }
        return res.send("Error");
    }
}
export default new UserController;
