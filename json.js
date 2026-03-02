const person = {
    name: 'Rofiq',
    age: 25,
    hobby: 'playing',
    food: 'Meet',
    Address: 'Rajshashi',
    isMarried: false
}

// console.log('explore JSOn');
const personJSON = JSON.stringify(person);
console.log(personJSON ,typeof person); //return person object with JSON format
const reverseJSON = JSON.parse(personJSON);
console.log(reverseJSON, typeof personJSON); //return main object