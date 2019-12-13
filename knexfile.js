// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    migrations: {
      foldername: './data/migrations'
    }
  },
  useNullAsDefault: true

};
