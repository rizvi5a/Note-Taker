const fs = require("fs");
const express =require ("express")
const path = require('path');
const app= express();

const PORT = 3000;



 const DB ='./Develop/db/db.json'

//Works use later
let mock_data ={
          
  "title":"Test Title 4",
  "text":"Test tex  4"
};

readFiles();
appendFiles(mock_data);

function readFiles() {
  fs.readFile(DB, 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log("read file method")
      //string as tested with data(0) undefined
      console.log(data)
      
    })
  }
function appendFiles(new_data) {
    fs.readFile(DB, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("read file method")
        //string as tested with data(0) undefined
        console.log(data)

        let parsed_data= JSON.parse(data);
        console.log(parsed_data)

       
        parsed_data.push(new_data);
        writeFile(parsed_data);

        let stringify_data = parsed_data;
        console.log(stringify_data);
        
      })

    }


  function writeFile(contents_in_json){

  let json_as_string = JSON.stringify(contents_in_json)

  fs.writeFile(DB, json_as_string, err => {
  if (err) {
    console.error(err)
    return
  }
   console.log("File written")
})
}

// app.get ('/', (rq, res) => {

//   console.log(__dirname);
//   console.log(path);
//   res.sendFile(path.join(__dirname, 'view.html'))

// })

app.get ('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));