let database = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "node_js",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "node_js",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "node_js",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
const env = process.env.NODE_ENV || 'development';

export default database[env];