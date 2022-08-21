import BaseRepository from './base-repository';
import { User } from '../../models/user.model';
export default class UserRepository extends BaseRepository {
    async findByName(name) {
        return User.findOne({
            where: {
                name,
            },
        });
    }
}
