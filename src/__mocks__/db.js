const faker = require('faker')

function generateUsers(qtd = 50) {
  const users = []

  for (let id = 0; id < qtd; id += 1) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()

    users.push({
      id,
      firstName,
      lastName,
      email,
    })
  }

  return { users }
}

module.exports = generateUsers
