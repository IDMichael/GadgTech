const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/', function(request,response) {
//     res.sendFile(path.join(__dirname,'public'/index.html));
// });

// app.get('/home', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/home.html));
// });

// app.get('/products', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/products.html));
// });

// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/about.html));
// });

// app.get('/contacts', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/contacts.html));
// });

// app.get('/account', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/account.html));
// });

// app.listen(port, () => {
//     console.log('My Simple Server is running at http://localhost:${port}');
// });

app.get('/', function(req, res) {
    res.send('My First Simple Server!');
});

app.listen(port, () => {
    console.log('My Simple Server is running at port 4000!');
});