// ## Array Cardio Day 2

const people = [{
    name: 'Wes',
    year: 1988
  },
  {
    name: 'Kait',
    year: 1986
  },
  {
    name: 'Irv',
    year: 1970
  },
  {
    name: 'Lux',
    year: 2015
  }
];

const comments = [{
    text: 'Love this!',
    id: 523423
  },
  {
    text: 'Super good',
    id: 823423
  },
  {
    text: 'You are the best',
    id: 2039842
  },
  {
    text: 'Ramen is my fav food ever',
    id: 123523
  },
  {
    text: 'Nice Nice Nice!',
    id: 542328
  }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older? Check whether at least one person age is > 18
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const hasAtleastOneAdult = people.some(person => {
  const year = new Date().getFullYear();
  return year - person.year > 18;
});
console.log(`hasAtleastOneAdult = ${hasAtleastOneAdult}`);

// Array.prototype.every() // is everyone 19 or older?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const areAllAdults = people.every(person => {
  const year = new Date().getFullYear();
  return year - person.year > 18;
});
console.log(`areAllAdults = ${areAllAdults}`);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// It returns the first one that matches
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const findById = (id) => comments.find(comment => comment.id === id);
console.log(findById(823423)); // Valid
// console.log(findById(12)); // Invalid, return undefined

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const findIndexOfId = (id) => comments.findIndex(comment => comment.id === id);
const indexOfId = findIndexOfId(823423);
if (indexOfId > -1) {
  comments.splice(indexOfId, 1);
  console.info(comments);
}
// console.log(findIndexOfId(12)); // Invalid, return -1
