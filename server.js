const express = require('express');
const path = require('path');
const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(request,response){
    res.sendFile(path.join(__dirname,'public'/index.html));
});

app.get('*', function(request, response){"Server is running"});
app.listen(3000, function(){"Server is running"});

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/home.html));
// });

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/products.html));
// });

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/about.html));
// });

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/contacts.html));
// });

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public'/account.html));
// });

// app.listen(port, () => {
//     console.log('Server is running at http://localhost:${port}');
// });