console.log('Starting app.js:');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't',
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b',
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('delete', 'Delete a note', {
        title: titleOptions,
    })
    .help()
    .argv;
const command = argv._[0];

let note;
switch (command) {
    case 'add':
        note = notes.addNote(argv.title, argv.body);
        note !== undefined ? console.log(`Note with title ${argv.title} added`) : console.log(`Note with title ${argv.title} already exists`)
        break;
    case 'list':
        const allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s)`);
        allNotes.forEach(element => {
            element !== undefined ? console.log('Current note:\n', JSON.stringify(element, null, 4)) : console.log(`No notes with title ${argv.title} stored`);
        });
        break;
    case 'read':
        note = notes.readNote(argv.title);
        note !== undefined ? console.log('Current note:\n', JSON.stringify(note, null, 4)) : console.log(`No notes with title ${argv.title} stored`);
        break;
    case 'delete':
    note = notes.deleteNote(argv.title);
        note === true ? console.log(`Note with title ${argv.title} removed`) : console.log(`Note with title ${argv.title} doesn't exists`)
        break;

    default:
    console.log('Command not recognized');
        break;
}