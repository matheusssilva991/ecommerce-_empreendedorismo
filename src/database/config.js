const dotenv = require('dotenv');

dotenv.config();

const config = {
  db: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_ROOT_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'test',
    port: process.env.MYSQL_PORT || 3306,
  },
};

module.exports = config;
