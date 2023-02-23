const {promises: fsPromises} = require('fs');

async function checkPassword(password) {
  const contents_user = await fsPromises.readFile("./lib/names.txt", 'utf-8');
  const names = contents_user.toString('utf-8').split(/\r?\n/);

  let score = 0;

  // Kollar efter minimum längd
  if (password.length >= 11) {
    score++;
  }

  // Kollar efter storabokstäver
  if (/(?=.*[A-Z])/.test(password)) {
    score++;
  }
  
  // Kollar efter nummer
  if (/(?=.*\d)/.test(password)) {
    score++;
  }

  // Kollar efter special symboler
  if (/(?=.*\W)/.test(password)) {
    score++;
  }

  // Kollar efter vanliga namn
  
  if (!names.includes(password.replace(/[^a-zA-Z]/g, '').toUpperCase())) {
    score++;
  }

  return score;
}

module.exports = checkPassword;