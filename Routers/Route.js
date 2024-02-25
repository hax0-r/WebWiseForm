const express = require("express")
const controllers = require("../Controllers/Controllers")
const route = express.Router()

route.post("/users", controllers.user)

module.exports = route