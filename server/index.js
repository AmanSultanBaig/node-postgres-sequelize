const express = require("express");
const dotenv = require("dotenv")
const app = express();
dotenv.config()

const db = require("./models/index")
db.sequelize.sync()

app.use(express.json())

app.use("/api", require("./routes/routes"))
app.get("/", (req, res) => res.send("WELCOME TO APP"))

let port = process.env.PORT || 8000
app.listen(port, () => console.log(`APP is Running on port: ${port}`))