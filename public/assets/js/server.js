const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON parsing
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

// API Routes
app.get('/api/notes', (req, res) => {
  // Read data from db.json and return as JSON
});

app.post('/api/notes', (req, res) => {
  // Receive new note data, add to db.json, and return the new note
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
