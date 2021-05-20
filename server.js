// const fs = require("fs");
const express =require ("express")
const path = require('path');
const { env } = require("process");
const app= express();

//const PORT = 3000;
var PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

app.use(require("./routes/apiroutes"))

app.use(require("./routes/html-routes"))





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

