let router = require("express").Router(); //router method returns an object that contains/allows us to use HTTP requests.

/*
    -post
    -put
    -delete
    -get
*/

//.post stores info in the database.storing info for later
//first argument is relative pathway, second is a callback function. req = request. res = response
router.post("/post", function(req,res){
    let response = {message: "This is from the post request"};
    res.json(response); //.json() method sends a json response.
})






module.exports = router; //exporting the modules for usage outside of this file
