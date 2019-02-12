console.log('Starting app.js:');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const res = notes.addNote();
console.log(res);

console.log(notes.add(3, 4));

const user = os.userInfo();

fs.appendFileSync('greeting.txt', `Hello, ${user.username}, you are ${notes.age}`);