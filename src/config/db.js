const { Pool } = require('pg');
require('dotenv').config();

// Use the connection string from the environment variable
const connectionString = process.env.DB_URL || 'postgresql://secure_vision_user:kf7LolWYpwqc5HysmOOTWqJU3c7OdnIl@dpg-cusuemtsvqrc73e200ng-a.oregon-postgres.render.com/secure_vision';

const pool = new Pool({
    connectionString,
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Database connection error:', err));

module.exports = pool;