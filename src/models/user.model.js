const connection = require('../database/connection');

class UserModel {
  async create(data) {
    const { name, email, password, address, phone_number } = data;
    const sql = `INSERT INTO user (name, email, password, address, phone_number) VALUES ('${name}',
    '${email}', '${password}', '${address}', '${phone_number}')`;
    try {
      await connection.execute(sql);
      return { name, email, address, phone_number };
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    const sql = 'SELECT * FROM user';
    try {
      const [users] = await connection.execute(sql);
      return users;
    } catch (error) {
      return error;
    }
  }

  async findOne(id) {
    const sql = `SELECT * FROM user WHERE id = ${id}`;
    try {
      const [user] = await connection.execute(sql);
      return user[0];
    } catch (error) {
      return error;
    }
  }

  async findOneByEmail(email) {
    const sql = `SELECT * FROM user WHERE email = '${email}'`;
    try {
      const [user] = await connection.execute(sql);
      return user[0];
    } catch (error) {
      return error;
    }
  }

  async update(id, data) {
    const { name, email, address, phone_number } = data;
    let { password } = data;
    const user = await this.findOne(id);

    if (user && !password) {
      password = user.password;
    }

    const sql = `UPDATE user SET name = '${name}', email = '${email}', password = '${password}',
    address = '${address}', phone_number = '${phone_number}' WHERE id = ${id}`;

    try {
      return await connection.execute(sql);
    } catch (error) {
      return error;
    }
  }
}


module.exports = new UserModel();
