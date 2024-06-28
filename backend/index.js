const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.get('/', (req, res) => {
  res.send('Oi');
});

app.listen(process.env.PORT, () => {
  console.log(`Backend funcionando na port ${process.env.PORT}`);
});
