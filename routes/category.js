var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { createCategory,getCategoryById,readCategory,readAllCategory,updateCategory,deleteCategory} = require("../controllers/category");
const {isSignedIn} = require("../controllers/auth")

//create category route
router.post("/category/create",isSignedIn, createCategory);

//get category by param
router.param("categoryId", getCategoryById)

//Read category route
router.get("/category/:categoryId", readCategory);
router.get("/categories", readAllCategory);





module.exports = router;
