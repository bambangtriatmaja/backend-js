// import express
const express = require("express");

// import controller student
const StudentController = require("../controllers/StudentController");

// buat object router
const router = express.Router();

// membuat routing home
router.get("/", (req, res) => {
  res.send("hello express");
});

// membuat routing student

router.get("/students", StudentController.index);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/students/:id", StudentController.destroy);

// export routing
module.exports = router;
