const render = require("../lib/render.js");
const checkPassword = require("../lib/checkPassword.js");

exports.view = function(req, res) {
  render.view("index.html", res);
}

exports.check = async function(req, res) {
  const password = req.body.password;
  const strength = await checkPassword(password);

  res.json({ status: "OK", data: { strength: strength }});
}