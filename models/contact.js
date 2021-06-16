const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true
    },
    email:{
        type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true
    },
    institute:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    contactno:{
        type:Number,
        minlength: 10,
        maxlength:12,
        unique:true,
        trim:true
    },
    message: {
        type:String,
        minlength:10,
        trim:true,
        required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
