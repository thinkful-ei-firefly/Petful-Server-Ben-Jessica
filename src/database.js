const Queue = require('./queue');

const cats = [
  {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
];

const dogs = [
  {
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
];

const catUsers = [
  {
    name: 'Jessica',
    id: 1029840294582093847
  }
];

const dogUsers = [
  {
    name: 'Ben',
    id: 1029840294582093847
  }
];

const catQueue = new Queue();
const dogQueue = new Queue();
const catUserQueue = new Queue();
const dogUserQueue = new Queue();

cats.forEach(cat => catQueue.enqueue(cat));
dogs.forEach(dog => dogQueue.enqueue(dog));
catUsers.forEach(user => catUserQueue.enqueue(user));
dogUsers.forEach(user => dogUserQueue.enqueue(user));

module.exports = { catQueue, dogQueue, catUserQueue, dogUserQueue };
