const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors")

// Body parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
// import routes
const imageGenerator = require("./routes/imageGenerator");
// use routes
app.use("/create", imageGenerator);

app.get('/', (req, res) => {
  res.status(200).send("canvai server running")
})

// listner
app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
