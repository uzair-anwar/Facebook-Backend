require("dotenv").config();

const { DATABASE_URL, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } =
  process.env;
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    db_url: DATABASE_URL,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    use_env_variable: "DATABASE_URL",
    db_url: DATABASE_URL,
  },
};
