// import db
const db = require("../config/database");

// buat model Student
class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students where id";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static async create(student) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, student, (err, results) => {
        resolve(results.insertId);
      });
    });
    const studentShow = await this.find(id);
    return studentShow;
  }

  static find(id) {
    // Lakukan promise select by id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // select data by id
    const student = await this.find(id);
    return student;
  }
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id=?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export model
module.exports = Student;
