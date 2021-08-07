require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');
let Log = require('./controllers/logcontroller');
let User = require('./controllers/usercontroller');



sequelize.sync();
app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/User', User);
app.use('/Log',Log);



app.listen(3000, function(){
    console.log('App is listening on port 3000');
})