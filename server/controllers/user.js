const User = require("../models/user");
const { normalizeErrors } = require("../helpers/mongoose");

exports.auth = function(req, res) {};
exports.register = function(req, res) {
  /*  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirmation = req.body.passwordConfirmation; */

  const { username, email, password, passwordConfirmation } = req.body;

  if (!password || !email) {
    return res.status(422).send({
      errors: [
        {
          title: "Email/Password missing",
          detail: "Please provide email and password."
        }
      ]
    });
  }

  if (password !== passwordConfirmation) {
    return res.status(422).send({
      errors: [
        {
          title: "Incorrect Password",
          detail: "Please provide same password."
        }
      ]
    });
  }

  User.findOne({ email }, function(err, existingUser) {
    console.log(err);
    console.log(existingUser);
    if (err) {
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    }

    if (existingUser) {
      return res.status(422).send({
        errors: [
          {
            title: "Invalid email",
            detail: "User with the email id, already exists."
          }
        ]
      });
    }

    const user = new User({
      username,
      email,
      password
    });

    user.save(function(err) {
      if (err) {
        console.log(normalizeErrors(err.errors));
        return res.status(422).send({ errors: normalizeErrors(err.errors) });
      }
      return res.json({ registered: true });
    });
  });
};
