const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;


  if (username === 'admin' && password === 'admin') {
    res.send(`<h2>Login berhasil! Selamat datang, ${username}.</h2>`);
  } else {
    res.send('<h2>Login gagal!</h2><a href="/">Kembali</a>');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));