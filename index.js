const express = require('express');
const books = require('./books.json');
const app = express();


app.get("",(req, res) => {
    res.send("Hello");
})

app.get("/books",(req, res) => {
    res.send(books);
})

 app.listen(4500,()=>{
     console.log('listening on port 4500')
 })