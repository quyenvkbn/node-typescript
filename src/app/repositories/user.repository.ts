import BaseRepository from '@/app/repositories/base.repository';
import {User} from '@/app/models/user.model';
import { Model } from 'sequelize-typescript';

class UserRepository extends BaseRepository<User> {
    public async findByName(name: string): Promise<Model | null> {
      return User.findOne({
        where: {
          name,
        },
      });
    }
}

export default new UserRepository(User);