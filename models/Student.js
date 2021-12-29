// import db
const db = require("../config/database");

// buat model Student
class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static create(student) {
    const id = new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, student, (err, results) => {
        resolve(results.insertId);
        console.log(results.insertId);
      });
    });
    return new Promise((resolve, reject) => {
      const view = "SELECT * FROM students WHERE id=?";
      db.query(view, id, (err, results) => {
        resolve(results);
        console.log(results);
      });
    });
  }
}

// export model
module.exports = Student;
