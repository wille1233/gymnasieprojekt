const fs = require("fs");

exports.view = function(fileName, res) {
  if (fs.existsSync("./views/" + fileName)) {
    const content = fs.readFileSync("./views/" + fileName);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
  }
}