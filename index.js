const express = require('express');
const router = require('./routes/router');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const Port = 5000;

app.use(express.json());
app.use('/', router);
app.use(express.static('public')); //serves static files from public folder

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Templates'));
console.log(__dirname);



// connectDB();

app.listen(Port, () => {
    console.log(`listening at http://localhost:${Port}/`);
});
