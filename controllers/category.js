const Category = require("../models/category");
const { check, validationResult } = require("express-validator");

//craete category controller
exports.createCategory = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  const category = new Category(req.body);
  category.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save message in DB"
      });
    }
    res.json(
        req.body 
    );
  });
};

//param extracter middleware
exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
      if (err) {
        return res.status(400).json({
          error: "Category not found in DB"
        });
      }
      req.category = cate;
      next();
    });
  };

exports.readAllCategory = (req,res)=>{
    Category.find().exec((err,items)=>{
        if(err){
            return res.status(400).json({
                error: "No categories found"
            });
        }
        res.json(items);
    })
};

exports.readCategory = (req,res)=>{
return res.status(200).json(req.category);
};



