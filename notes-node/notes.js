const fs = require('fs');
console.log('Starting notes.js:');

const fetchNotes = () => {
	try {
		let notesString = fs.readFileSync('notes-data.json', );
		return notes = JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};
const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
	let notes = fetchNotes();
	let note = {
		title,
		body,
	};

	let duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
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
	let notes = fetchNotes();
	let filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
}

module.exports = {
	addNote,
	getAll,
	readNote,
	deleteNote
};