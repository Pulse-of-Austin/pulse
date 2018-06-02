const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});


(async () => {
  await knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
      knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('password');
        table.string('email').defaultTo(null).unique();
        table.integer('zipcode');
        table.string('gender');
        table.integer('age');
        table.integer('income');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
      });
    }
  });

  await knex.schema.hasTable('categories').then((exists) => {
    if (!exists) {
      knex.schema.createTable('categories', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
      });
    }
  });

  await knex.schema.hasTable('categories_users').then((exists) => {
    if (!exists) {
      knex.schema.createTable('categories_users', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('users.id');
        table.integer('category_id').references('categories.id');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
      });
    }
  });

  await knex.schema.hasTable('topic').then((exists) => {
    if (!exists) {
      knex.schema.createTable('topic', (table) => {
        table.increments('id').primary();
        table.string('description');
        table.string('details');
        table.integer('vote_date');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
      });
    }
  });

  await knex.schema.hasTable('topic_categories').then((exists) => {
    if (!exists) {
      knex.schema.createTable('topic_categories', (table) => {
        table.increments('id').primary();
        table.integer('topic_id').references('topic_id');
        table.integer('category_id').references('categories.id');
      });
    }
  });
})();

