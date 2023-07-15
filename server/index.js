const express = require("express");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9001;

app.use(cors());
app.use(express.json());

//DB Connection
const conn = require("./db/conn");

conn();

//Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});