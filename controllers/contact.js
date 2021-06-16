const Contact = require("../models/contact");
const { check, validationResult } = require("express-validator");


exports.contact = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  const contact = new Contact(req.body);
  contact.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save message in DB"
      });
    }
    res.json(
        "message sent successfully"    
    );
  });
};

