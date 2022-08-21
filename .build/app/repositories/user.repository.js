import BaseRepository from './base.repository';
import { User } from '../models/user.model';
class UserRepository extends BaseRepository {
    async findByName(name) {
        return User.findOne({
            where: {
                name,
            },
        });
    }
}
export default new UserRepository(User);
