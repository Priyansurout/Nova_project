const express = require('express')
const router = express.Router()

const {handelRegisterUser} = require("../controllers/users")

router.route("/register")
.post(handelRegisterUser)



module.exports = router;