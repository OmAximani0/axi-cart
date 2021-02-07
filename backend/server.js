// * Requirements
const express = require('express');
const cors = require('cors');

// * Configured 'dotenv' package
require('dotenv').config()

// * Express Object
const app = express();

// * Cors Verification
app.use(cors());

app.get('/hello', (req, res) => {
	res.send('Hello World');
});

// * Starting Listening on Specified Port
const PORT = process.env.PORT | 3000
app.listen(PORT, () => {
	console.log(`Server Started At Port ${PORT}`);
});