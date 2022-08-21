import BaseRepository from './base.repository';
import {User} from '../models/user.model';
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