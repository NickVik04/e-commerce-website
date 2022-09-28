const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");

router.get("/",(req,res) => res.send("User route"));
router.post("/",
[
    check("name","Name is Required").not().isEmpty(),
    check("email","Enter a Valid Email").isEmail(),
    check("passowrd", "Password should have atleast 5 charactes").isLength({min:5})
],
(req,res)=>{
    const errors = validationResult(req);
    console.log(req.body);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }


});

module.exports= router;