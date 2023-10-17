module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-155.railway.app'),
      port: env.int('PGPORT', 6117),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'wkPDhvBQX50IL7RugzzU'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
