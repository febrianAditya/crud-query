const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mytodo",
    password: "localhost",
    port: 5432
})

module.exports = pool