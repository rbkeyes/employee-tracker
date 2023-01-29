// import dependencies
const express = require('express');
const mysql = require('mysql2');

// set PORT
const PORT = process.env.PORT || 3001;

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Sackopotatum',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);