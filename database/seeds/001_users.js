require('dotenv').config()
const faker = require('faker');
const bcrypt = require('bcryptjs');

const createFakeUser = () => ({
  username: faker.internet.userName(),
  password: bcrypt.hashSync(process.env.PASSWORD, 8),
  email: faker.internet.email(),
  bio: faker.lorem.paragraph()
})
exports.seed = function(knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 100;

  for (let i=0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser())
  }
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(fakeUsers);
    });
};
