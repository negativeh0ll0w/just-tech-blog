const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'coolguy2010',
    password: 'p@ssword'
  },
  {
    username: 'coolerguy15',
    password: 'P455W0RD'
  },
  {
    username: 'computernerd22',
    password: 'P@$$W0RD'
  },
  {
    username: '1337gamer',
    password: 'p4$$word'
  },
  {
    username: 'guywardsback',
    password: 'w0rdpa$$'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
