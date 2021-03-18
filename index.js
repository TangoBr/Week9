const express = require(`express`);
const app = express();
const path = require(`path`);
const router = express.router();

app.get(`/dashboard`, (req, res) => {
    res.sendFile(path.join(__dirname, `..`, `html`, `dashboard.html`))
});

app.get(`/login`, (req, res) => {
    res.sendFile(path.join(__dirname, `..`, `html`, `login.html`))
});

app.get(`/register`, (req, res) => {
    res.sendFile(path.join(__dirname, `..`, `html`, `register.html`))
});

app.listen(3000, () => {
    console.log(`>>>SERVER STARTED<<<`)
});

