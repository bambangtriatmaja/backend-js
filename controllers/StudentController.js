const Student = require("../models/Student");
class StudentController {
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "Menampilkan data student",
      data: students,
    };
    res.status(200).json(data);
  }
  async store(req, res) {
    const student = {
      nama: req.body.nama,
      nim: req.body.nim,
      email: req.body.email,
      jurusan: req.body.jurusan,
    };
    const students = await Student.create(student);
    const data = {
      message: `Menambahkan data student`,
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
