let router = require("express").Router()
let DB = require("../db/db.json")
let fs = require("fs");


router.get("/api/notes", (req,res)=>{
    fs.readFile("./db/db.json", 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("read file method")
        //string as tested with data(0) undefined
        console.log(data)
        DB = JSON.parse(data)
        res.json(DB)
      })
})
router.post("/api/notes", (req,res)=>{
    DB.push({
        id: Math.floor(Math.random()*1000),
        title: req.body.title,
                text: req.body.text
    })
    fs.writeFile("./db/db.json", JSON.stringify(DB) , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("read file method")
        //string as tested with data(0) undefined
        console.log(data)
        DB = data
        res.json(DB)
      })
})
router.delete("/api/notes/:id", (req,res)=>{
    let Newdata = []
    for(let i=0;i < DB.length; i++) {
     if( DB[i].id != req.params.id){
         Newdata.push(DB[i])
     }

    }
    DB = Newdata

    fs.writeFile("./db/db.json", JSON.stringify(DB) , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("delete file method",DB)
        //string as tested with data(0) undefined
       
        res.json(DB)
      })
})
module.exports = router;

