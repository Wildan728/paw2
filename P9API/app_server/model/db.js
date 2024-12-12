const mongoose = require("mongoose");
mongoose.connect(
  //"mongodb://localhost:27017/dbbuku"
  "mongodb+srv://mdp:ARPF50F0Xi0eXQyI@cluster0.e0yel.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.error("App Starting error", err.stack);
  console.log("Connection Failed");
});