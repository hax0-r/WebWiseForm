const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors");
const route = require("./Routers/Route");
const PORT = 5000
const app = express();
const BASE_URL = `mongodb+srv://talha185133:StCKt4Fi5qk4T8h5@cluster0.nvzkt0f.mongodb.net/FORM_DATA`
mongoose.connect(BASE_URL)
    .then((res) => console.log("Mongoose connected"))
    .catch((err) => console.log("Mongoose not connected"))

app.use(cors())
app.use(express.json())

app.use("/api",route)

app.listen(PORT, () => console.log(`Your server is running on localhost ${PORT}`))
