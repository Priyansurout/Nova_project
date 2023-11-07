const express = require('express')
const router = express.Router()

const {handelRegisterUser, handelLoginUser} = require("../controllers/users")

router.route("/register")
.post(handelRegisterUser)

router.route("/login")
.post(handelLoginUser)



module.exports = router;