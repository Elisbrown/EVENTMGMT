const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // specify the folder where uploaded files will be stored temporarily

const app = express();
app.use(cors());
const port = 5500;

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'Sunyin',
    password: 'test.dev$',
    database: 'event_portal',
    port: 3306,  
});

// API endpoint to check database connection
app.get('/check-connection', (req, res) => {
    // Check if the connection is established
    if (pool && pool._allConnections.length > 0) {
        res.json({ status: 'connected' });
    } else {
        res.json({ status: 'disconnected' });
    } 
});

// API endpoint to handle form submission
app.post('/submit', upload.array('images'), (req, res) => {
    const { images, title, description, date, time, venue } = req.body;
    // Execute the SQL INSERT query
    pool.query(
        'INSERT INTO events (images, title, description, date, time, venue) VALUES (?, ?, ?, ?, ?, ?)',
        [images, title, description, date, time, venue],
        (error) => {
            if (error) {
                console.error(error);
                console.log('Failed to insert data into database'); 
                res.status(500).json({ status: 'error' }); 
            } else {
                console.log('Successfully inserted data into database');
                res.json({ status: 'success' });
            }
        }
    );
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});