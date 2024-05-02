const express = require('express');
const app=express();
const PORT =4000;

app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(`server is strted on port no  http://localhost:${PORT}`)
})
