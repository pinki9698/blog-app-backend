var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { contact} = require("../controllers/contact");
const {isSignedIn} = require("../controllers/auth")

router.post(
  "/contact",
  [
    check("name", "name should between 2-150 characters").isLength({ min: 2 ,max:150}),
    check("email", "email is required").isEmail(),
    check("institute", "name should between 2-150 characters").isLength({ min: 2 ,max:150}),
    check("message", "message should be atleast 10 characters long").isLength({ min: 10 ,max:150}).escape().matches(/^[A-Za-z0-9 .,'!&]+$/),
    check("contactno","").isLength({min:10, max:12})
   
  ],
  
  contact
);



module.exports = router;
