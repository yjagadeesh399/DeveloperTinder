const express = require("express"); 

const app = express();



// app.use("/test",(req,res)=>{
//     res.send("Hello your are listening to server")
// });
// app.use("/hello",(req,res)=>{
//     res.send("Hello hello hello hello .......!!!!!")
// });

app.get("/user", (req,res)=>{res.send("Used get method to get data")});

app.post("/user", (req,res)=>{res.send("Used get method to post data")});

app.delete("/user", (req,res)=>{res.send("Used get method to delete data")});

app.use("/",(req,res)=>{res.send("This is route .......!!!!!")});

app.listen(3000, ()=>{console.log("We are using the SERVER")});

//thanks for the comments