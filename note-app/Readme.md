A simple note app built with node.js. This app uses 'fs', 'yargs' and 'lodash' external modules.

notes.js is the core module and app.js uses functionalities of that module.

There are 4 features in this app:

1) Create a note
2) Read a note
3) Remove a note
4) List all notes.

Notes are added into a .json file called notes-data.json. 

To use the features of the this app, run the following commands.

1) Add a note

    node app.js add --title="Test Title" --body="Test body"

    or

    node app.js add -t="Test Title" -b="Test body"


2) Read a note

    node app.js read --title="Test Title"

    or 

    node app.js read -t="Test Title"


3) Remove a note

    node app.js remove --title="Test Title"

    or 

    node app.js remove -t="Test Title"


4) List all notes

    node app.js list
