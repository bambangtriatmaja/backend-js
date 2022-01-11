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
    const student = await Student.create(req.body);
    const data = {
      message: `Menambahkan data student`,
      data: student,
    };
    res.status(201).json(data);
  }
  async update(req, res) {
    /*
     *Cek apakah ada data id student di endpoint
     *Jika ada, lakukan update sesuai input json
     *jika tidak ada, beritahu bahwa data tidak ada
     */
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const studentUpdated = await Student.update(id, req.body);

      const data = {
        message: `Mengedit data student`,
        data: studentUpdated,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Data tidak ada`,
      };
      res.status(404).json(data);
    }
  }
  async destroy(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data student`,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Data tidak ada`,
      };
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);
    if (student) {
      const data = {
        message: `Melihat data student`,
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Data tidak ada`,
      };
      res.status(404).json(data);
    }
  }
}

// buat object student controller
const object = new StudentController();

// export object
module.exports = object;
