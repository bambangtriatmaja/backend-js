const student = require("../data/student");
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkan data student",
      data: student,
    };
    res.json(data);
  }
  store(req, res) {
    const { nama } = req.body;
    student.push(nama);
    const data = {
      message: `Menambahkan data students ${nama}`,
      data: student,
    };
    res.json(data);
  }
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    student[id] = nama;
    const data = {
      message: `Mengedit data students id ${id}, nama ${nama}`,
      data: [student],
    };
    res.json(data);
  }
  destroy(req, res) {
    const { id } = req.params;
    student.splice(id, 1);
    const data = {
      message: `Menghapus data students ${id}`,
      data: [student],
    };
    res.json(data);
  }
}

// buat object student controller
const object = new StudentController();

// export object
module.exports = object;
