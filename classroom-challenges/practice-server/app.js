var express = require("express"); //importing express to use HTTP requests for later
var app = express(); //instance of our express variable. methods and properties. Firing off function, allowing us to make an Express app. 
let testController = require ("./controllers/testcontroller");

let calcController = require("./controllers/calculatorcontroller");

app.use("/test", testController);

app.use("/calc", calcController);


//.use method is a middleware function that allows us to create a pathway
// app.use("/test", function(req,res){ 
//     let response = {message: "This is a test"};
//     res.json(response)
// });


//.listen method allows us to run a port (port 3001) or listen to a host. (running on local machine) takes on one argument
// 65,535 possible port numbers. fun fact
app.listen(3001, function () {
  console.log("App is listening on port 3001");
});




