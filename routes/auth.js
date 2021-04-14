const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  //express validator
  [
    check("name", "name should be at least three characters").isLength({
      min: 3,
    }),
    check("email", "Email is required").isEmail(),
    check("password", "password should be atleast 3").isLength({ min: 3 }),
  ],
  signup
);

router.post(
  "/signin",
  //express validator
  [
    check("email", "Email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
