// Reading Environment variables
require("dotenv").config();


console.log(process.env.HELLO)

// importing the server application
const app = require("./app");

// importing databaes connection
require("./database");

// testing the AWS credentials
//  require("./aws");

// starting the server on a HTTP Port
app.listen(process.env.PORT);

console.log("server porty",process.env.PORT);