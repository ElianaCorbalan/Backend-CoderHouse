const knex = require('knex');

const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'desafio17'
  },
  useNullAsDefault: true
})

module.exports = db