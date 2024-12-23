const express = require("express"); 

const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello your are listening to server")
});
app.use("/hello",(req,res)=>{
    res.send("Hello hello hello hello .......!!!!!")
});

app.listen(3000, ()=>{console.log("We are using the SERVER")});

//thanks for the comments