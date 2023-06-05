const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

// Define the static directory
const publicDir = path.join(__dirname, 'public');

// Use the express.static middleware to serve static files from the public directory
app.use('/static', express.static(publicDir));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, () => {
	console.log(`Server runnig @ Port ${PORT}`)
})
