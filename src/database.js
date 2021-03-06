require('sqlite3');

const database = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite',
  },
});

database.schema.hasTable('grudges').then((exists) => {
  if (!exists) {
    return database.schema.createTable('grudges', (t) => {
      t.increments('id').primary();
      t.text('dateAdded');
      t.string('name', 100);
      t.string('offense', 500);
      t.boolean('forgiven');
    });
  }
});

module.exports = database;
