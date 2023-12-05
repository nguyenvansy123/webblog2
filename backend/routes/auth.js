var express = require("express");
const { signup,signin } = require("../controllers/auth");
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../validators/auth");
var router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin",validateSigninRequest, isRequestValidated, signin);


module.exports = router;