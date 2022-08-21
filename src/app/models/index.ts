import { Sequelize } from 'sequelize-typescript'
import config from '@/config/database.js'

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'mysql'
});

export { Sequelize, sequelize }