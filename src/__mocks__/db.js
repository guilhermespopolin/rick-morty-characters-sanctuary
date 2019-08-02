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

function generateCharacters() {
  const characters = [
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z',
    },
  ]

  return characters
}

function initializeMockedDB() {
  return {
    users: generateUsers(),
    characters: {
      info: {
        prev: '',
        next: 'https://rickandmortyapi.com/api/character/?page=2',
      },
      results: generateCharacters(),
    },
  }
}

module.exports = initializeMockedDB
