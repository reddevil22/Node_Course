console.log('Starting notes.js:');

const addNote = (title, body) => {
	console.log('TCL: addNote -> title:', title)
	console.log('TCL: addNote -> body:', body)
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