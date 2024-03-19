const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint vulnerable to XSS
app.get('/xss', (req, res) => {
  const { name } = req.query;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

// Endpoint vulnerable to CSRF
app.post('/transfer', (req, res) => {
  const { amount, to } = req.body;
  // Imagine transferring money to 'to' here
  res.send(`Transferred $${amount} to ${to}`);
});

// Backdoor access control (BAC)
let isAdminLoggedIn = false;

app.get('/admin/login', (req, res) => {
  const { username, password } = req.query;
  if (username === 'admin' && password === 'password') {
    isAdminLoggedIn = true;
    res.send('Admin logged in successfully');
  } else {
    res.send('Incorrect credentials');
  }
});

app.get('/admin/data', (req, res) => {
  if (isAdminLoggedIn
