# Note Taker APPLICATION

The starter code was modified to generate Note Taker Apllication. The main task was to establised proper paths to connect html and index files using Express and fs packages and the deploy the entire application to Heroku.

## SERVER

The server ( server.js) file includes routes to index.html and notes.html files.

## Routes

The following routes  files are created"

html-routes.js
apiroutes.js

to include:

* `GET /notes`  returns the `notes.html` file.

* `GET *`  returns the `index.html` file.

The following API routes are created:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes`  receives a new note to save on the request body, and adds to the `db.json` file.

* The random-number method is used to create a unique id  for db.json files entries.

* `DELETE /api/notes/:id`  deletes a note  from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## DB JSON

The New data is stored in db.json files.

## Mock-Up

The following images show the web application's appearance and functionality: 
https://secure-depths-03801.herokuapp.com/