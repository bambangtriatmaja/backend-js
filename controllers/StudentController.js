const Student = require("../models/Student");
class StudentController {
  async index(req, res) {
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: "Menampilkan data student",
        data: students,
      };
      return res.status(200).json(data);
    }
    const data = {
      message: "Data is empty",
    };
    return res.status(200).json(data);
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: `Semua data harus dikirim`,
      };
      return res.status(422).json(data);
    }
    const student = await Student.create(req.body);
    const data = {
      message: `Menambahkan data student`,
      data: student,
    };
    return res.status(201).json(data);
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
      return res.status(200).json(data);
    }
    const data = {
      message: `Data tidak ada`,
    };
    return res.status(404).json(data);
  }
  async destroy(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data student`,
      };
      return res.status(200).json(data);
    }
    const data = {
      message: `Data tidak ada`,
    };
    return res.status(404).json(data);
  }

  async show(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);
    if (student) {
      const data = {
        message: `Melihat data student`,
        data: student,
      };
      return res.status(200).json(data);
    }
    const data = {
      message: `Data tidak ada`,
    };
    return res.status(404).json(data);
  }
}

// buat object student controller
const object = new StudentController();

// export object
module.exports = object;
