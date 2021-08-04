let express = require('express');
let app = express();

app.use('/test', function(req,res){
    res.send('This is a test!!')
})

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})