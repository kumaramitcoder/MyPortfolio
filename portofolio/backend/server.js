require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const corsOptions = require("./src/config/corsOptions");
const keys = require("./src/config/keys");
const mailgun = require("./src/services/mailgun");
const path = require("path");



const PORT = keys.port;

// Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));


// Route to handle form submission
app.use("/", require("./src/router/root"));
app.use("/contact", require("./src/router/contact"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
