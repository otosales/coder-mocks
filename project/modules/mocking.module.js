const bcrypt = require('bcrypt');

function getRandomRole() {
  return Math.random() < 0.5 ? 'user' : 'admin';
}

async function generateUsers(count) {
  const users = [];

  for (let i = 1; i <= count; i++) {
    const hashedPassword = await bcrypt.hash('coder123', 10);
    users.push({
      username: `user${i}`,
      password: hashedPassword,
      role: getRandomRole(),
      pets: []
    });
  }

  return users;
}

module.exports = { generateUsers };
