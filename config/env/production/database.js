module.exports = ({ env }) => ({
  connection: {
    debug: true,
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'strapi'),
      user: env('PGUSER', 'strapi'),
      password: env('PGPASSWORD', 'password'),
      ssl: env.bool(true),
      schema: 'public',
    },
    pool: { min: 0 }
  }
});
