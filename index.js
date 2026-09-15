const express = require("express")

const PORT = 8001;

const app = express();

app.get("/" , (req,res)=>{
      res.send("Library management api is running")
})


//app.get("*",(req,res)=>{
  //  res.status(500).json({
       // message: "Not built yet"
   // })
//})

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})