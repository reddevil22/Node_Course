console.log('Starting app.js:');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.readNote(argv.title, argv.body);
        break;
    case 'delete':
    notes.deleteNote(argv.title);
        break;

    default:
    console.log('Command not recognized');
        break;
}