const express = require("express");

const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Run app" });
});

require("./app/routes/list.routes.js")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
