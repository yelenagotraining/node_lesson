
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const errorController = require('./controllers/error');

const db = require('./util/database');


// install and use body parser
const app = express();


app.set('view engine','ejs');
//app.set('view engine','hbs');
// app.set('view engine','pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products').then(
    result => {
        console.log(result[0], result[1]);
    })
    .catch( () => {
    console.log(err);
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
// order matters: general router should go last
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3002);