const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
      unique: true
    },
    content: {
      type: String,
      trim: true,
      required: true,
     
    },
    conclusion: {
      type: String,
      required: true,
      maxlength: 10000,
      trim: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      
    },
    
    author: {
      type: ObjectId,
      ref: "User",
      
    }
 
   
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
