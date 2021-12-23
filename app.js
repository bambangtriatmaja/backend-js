// Import Express
const { urlencoded } = require("express");
const express = require("express");

// membuat object express
const app = express();

// mendefinisikan routing
const router = require("./routes/api");
app.use(express.json());
app.use(router);

// definisikan port
app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
