var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const profileRouter = require('./routes/profile');
const adminRouter = require('./routes/admin');
const mahasiswaRouter = require('./routes/mahasiswa');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Sync Database
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Unable to sync database:', err);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/profile', profileRouter);
app.use('/', mahasiswaRouter); 
app.use('/', adminRouter); 
// app.use('/', graduatesRouter); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
