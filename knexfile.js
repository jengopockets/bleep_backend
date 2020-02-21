// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: '127.0.0.1',
      port: '5555',
      user: 'postgres',
      password:process.env.PASS,
      database: 'bleep'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
