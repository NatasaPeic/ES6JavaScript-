// forEach practice

// Question 1: Processing Values

var images = [
  { height: 10, width: 30},
  { height: 20, width: 90},
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
  areas.push(image.width * image.height);
});


// Map practice
// map is used to motify records in some list of data

// Here we are defining an array of numbers
var numbers = [1,2,3];
// Here were are defining an empty array that the doubled numbers will be pushed into
var doubledNumbers = [];

// Here we are defining a for loop;
for (var i = 0; i < numbers.length; i++) {
// For each iteration of the numbers array, the number is doubled and pushed into the doubledNumbers array
  doubledNumbers.push(numbers[i] * 2);
}
// Here we are using the map function to return the doubled numbers
var doubled = numbers.map(function(number) {
  return number * 2;
});

// Both the for loop and the map function return the same result
doubled;
doubledNumbers;

// Second Example:
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

// Here we are plucking a particular property off of each object within the array
var prices = cars.map(function(car) {
  return car.price;
});

prices;


// Question 2: Plucking Values

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height;
})

var heights;

//  Question 3: Calculating Values with Map


var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time
})

var speeds;

// Question 4: Really Hard - Implementing 'Pluck'

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
  function pluckPaint (item) {
    return item[property];
  }

  var returnArray = array.map(pluckPaint);

  return returnArray;
}

pluck(paints, 'color');


// Filter method
// Filter out or sort in a list
// Return a filtered list of all of the items that have a type of vegetable

var products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'},
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}
filteredProducts;


products.filter(function(product) {
  return product.type === 'vegetable';
});

// Another example:


var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

// We are filtering the products where type is 'vegetable', quantity is greater than 0, price is less than 10
products.filter(function(product) {
//  return the products where type is equal to vegetable
  return product.type === 'vegetable'
// return the products where quantity is greater than zero
  &&  product.quantity > 0
// return the products where price is less than 10
  && product.price < 10
});


var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post'},
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}


commentsForPost(post, comments);

// Question 5: Filtering Values

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// Here filteredNumbers is defined and set equal to numbers.filter.
// It is passed number, and set to return numbers that are greater than 50.
var filteredNumbers = numbers.filter((number) => {
  return number > 50;
});

filteredNumbers;


// Question 6: Handling Permissions with Filter

// Filter the array of users, only returning users who have admi level access.
// Assign the result to the variable 'filteredUsers'.
// Don't forget to use the 'return' keyword in the function.

// need to continue to work on this solution
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: false }
];

var filteredUsers = users.filter((user) => {
  return user.admin;
});

var filteredUsers;



// Question 7: Implementing 'reject'

// A reject function has been defined and it is passed an array and an iteratorfunction
function reject(array, iteratorFunction) {
// the filter helper method is performed on the array
  return array.filter(function(element) {

    return !iteratorFunction(element)});
  }


// Find Helper method

// The Car function is defined and passed the parameter of model
function Car(model) {
	this.model = model;
}

// The car array is defined
var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
 ];

// The find helper method is performed on the cars array
cars.find(function(car) {
// The car with the model of Focus will be returned
  return car.model === 'Focus';
});

// Another Example:

// The posts array is defined
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

// The comment object is defined
var comment = { postId: 1, content: 'Great Post' };

// the postForComment function is defined and passed the parameters posts and comment
function postForComment(posts, comment) {
// The find helper method is performed on posts and is passed a iterator function
  return posts.find(function(post) {
// return the comments that match with the post id.
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);


function Car(model) {
  this.model = model;
}

var cars = [
// this.model = 'Buick'
  new Car('Buick'),
// this.model = 'Camaro'
  new Car('Camaro'),
// this.model = 'Focus'
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});


// Example:
// Out of all of the posts, find the post with the id of 45

// An array of posts
const posts = [
  {id: 1, title: 'Post title'},
  {id: 2, title: 'Post title'},
  {id: 3, title: 'Post title'},
  {id: 4, title: 'Post title'},
  {id: 5, title: 'Post title'},
  {id: 6, title: 'Post title'}
];

const postId = getIdFromURL();
// Walk through the posts and find the id that equals 45
posts.find(post => post.id === postId);


// Question 8:
// Find the user in the user's array who is an admin.
// Assign this user to the variable 'admin'


var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => {
  return user.admin === true;
});

admin;

// Question 9: What's Your Balance
// Find the account with a balance of 12 and assign it to the variable 'account'.
var accounts = [
  { balance: - 10},
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => {
  return account.balance === 12;
});

account;

// Question 10: Custom findwhere Helper


var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];

  return array.find(ladder => {
    return ladder[property] === criteria[property];
  });
}

findWhere(ladders, { height: 25 });


// Every & Some Helper Methods

var computers = [
  { name: 'Apple', ram: 24},
  { name: 'Compaq', ram: 4},
  { name: 'Acer', ram: 32 }
];

// Here the question is solved with a for loop
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16 ) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

"---"
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;


// Every Helper Method
// Look at all of the values being returned
computers.every(function(computer) {
  return computer.ram > 16;
  // this will return false
});

// Some Helper Method
// There is an 'or' value between all of the operators

computers.some(function(computer) {
  return computer.ram > 16;
});


// Another Example:

var names = [
  'Alexandria',
  'Matthew',
  'Joe'
];

names.every(function(name) {
  return name.length > 4;
  // this will return false
});

names.some(function(name) {
  return name.length > 4;
});

// Example:

function Field(value) {
  this.value = value;
}


Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');


var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});


if (formIsValid) {
// allow user to submit
} else {
// show an error message
}


// Question 11: Finding Submitted Users
// Given an array of users, return 'true' if every user has submitted a request form.
// Assign the result to the variable 'hasSubmitted'


var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => {
  // We can do this because every returns a boolean
  return user.hasSubmitted;
});

// Question 12: In Progress Network Requests

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => {
  return request.status === 'pending';
})

// What is the difference between every and some?
