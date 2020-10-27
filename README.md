# Understanding NPM Scripts
`npm init`

npm install --save express
npm install nodeman --save-dev
add script to use nodeman
In the package.json:
`"start": "nodemon app.js"`
add app.js file
create express.js app inside the app.js file
```javascript
const express = required('express');
const app = express();


app.use('/users/',(req,res,next) =>{
    console.log('second middleware');
    res.send('<p>Assignment solved</p>');

});
app.use('/',(req,res,next) =>{
    console.log('first middleware');
    //next();

});
app.listen(3000);



```

> install nodemon as dev dependency

> Make sure your "catch all"route is last, e.g. 404
> It could also be a route to home '/'

> To run the program:
```javascript
npm start
```
```javascript
npm install --save mysql2
```
