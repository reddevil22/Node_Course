console.log('Starting app.js:');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

let note;
switch (command) {
    case 'add':
        note = notes.addNote(argv.title, argv.body);
        note !== undefined ? console.log(`Note with title ${argv.title} added`) : console.log(`Note with title ${argv.title} already exists`)
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.readNote(argv.title, argv.body);
        break;
    case 'delete':
    note = notes.deleteNote(argv.title);
        note === true ? console.log(`Note with title ${argv.title} removed`) : console.log(`Note with title ${argv.title} doesn't exists`)
        break;

    default:
    console.log('Command not recognized');
        break;
}