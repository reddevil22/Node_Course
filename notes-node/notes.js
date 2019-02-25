const fs = require('fs');
console.log('Starting notes.js:');

const addNote = (title, body) => {
	let notes = [];
	let note = {
		title,
		body,
	};

	try {
		let notesString = fs.readFileSync('notes-data.json', );
		notes = JSON.parse(notesString);
	} catch(e) {

	}
	let duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}
}

const getAll = () => {
	console.log('Getting all notes');
}

const readNote = (title, body) => {
	console.log('Getting', title);
	console.log('body:', body);
}

const deleteNote = (title) => {
	console.log('Deleting', title);
}

module.exports = {
	addNote,
	getAll,
	readNote,
	deleteNote
};