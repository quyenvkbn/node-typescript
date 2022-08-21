import { sequelize } from '@/app/models'
import { Optional } from 'sequelize'
import { Table, Model, Column, DefaultScope } from 'sequelize-typescript'

interface UserAttributes {
  id: number
  name: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@DefaultScope(() => ({
  attributes: ['id', 'name']
}))
@Table({
  timestamps: false,
  tableName: 'users',
  modelName: 'User'
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column
  declare name: string;
}

sequelize.addModels([User]);