// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/g90crud'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
