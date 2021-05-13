const fs = require("fs");
const { write } = require("fs/promises");

const DB ='./Develop/db/db.json'


let mock_data ={
          
  "title":"Test Title 2",
  "text":"Test tex 2t"
};
appendFiles(mock_data);



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
        writeFiles(parsed_data);

        let stringify_data = JSON.stringify(parsed_data);
        console.log(stringify_data);
        
      })

    }

    function writeFiles(content_in_json)

  let json_as_string = JSON.stringify(content_in_json)

  fs.writeFile('DB', json_as_string, err => {
  if (err) {
    console.error(err)
    return
  }
   console.log("File written")
})
 //function appendFiles() {
  //   fs.read
     
//  }