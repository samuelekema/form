const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.get('/check', (req, res) => {
    res.sendFile(__dirname + '/check.html');
})

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    const password = req.body.password;

    if (!username || username.trim() === '' || !password || password.trim() === '') {
        // If either username or password is empty or only contains whitespace
        res.status(400).send('<h1>Username and Password are required</h1>');
    } else {
        // If username and password are valid
        res.redirect(`/check?username=${encodeURIComponent(username)}`);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

















