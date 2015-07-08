//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
    name: 'luke',
    age: 34
};

console.log(me.name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
    band: 'RBF',
    food: 'wings',
    person: 'wife',
    book: 'WoT',
    movie: 'V4V',
    holiday: 'xmas'
};


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'Nissan';


//Now change the food key in your favoriteThings object to be 'Pizza' and change the book key in your favoriteThings object to be 'To Kill a Mockingbird'.

favoriteThings.food = 'Pizza';
favoriteThings.book = 'To Kill a Mockingbird';

console.log(favoriteThings);


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backpack = {};
var item = 'firstPocket';
backpack[item] = 'chapstick';

//After you do the above, alert your entire backPack object.

//alert(backpack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backpack);



//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me2 = {
    name: 'luke',
    age: '34',
    height: '6 ft 2 inches',
    gender: 'male',
    married: true,
    eyeColor: 'blue',
    hairColor: 'blonde'
};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var i in me2) {
    console.log(me2[i])
}



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
    song1: '4 minutes',
    song2: '3 minutes',
    song3: '12 minutes',
    song4: '5 minutes',
    song5: '30 seconds'
};


//Now, loop through your album object alerting every song title individually.

for (var key in album) {
    console.log(key);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
    Kentucky: 35000,
    Louisianna: 120000,
    Mississippi: 40000,
    Montana: 14000,
    Main: 30000
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var i in states) {
    if (states[i] > 30000) {
        console.log(i);
    }
}




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (var x in user) {
    if (user[x] !== true) {
        delete user[x]
    }
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Luke";
user.pwHash = "brown";
user.username = "Nellas";

console.log(user);


//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            console.log('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = 'Tyler S. McGinnis';
user.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
    console.log('hello');
};

methodCollection.logHello = function () {
    console.log('hello')
};

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(name, birthday, ssn) {
    this.name = name;
    this.birthday = birthday;
    this.ssn = ssn;
}

console.log(new MakePerson('luke', '1/23', 'private'));



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

 function MakeCard(firstName, lastName, pan, expDate, cvv) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.pan = pan;
     this.expDate = expDate;
     this.cvv = cvv;
}
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

var bindCard = function(constructor1, constructor2) {
    var newObj = {};
    var person = constructor1;
    var creditcard = constructor2;
    for (var key in person) {
        newObj[key] = person[key];
    }
    for (var attribute in creditcard) {
        newObj[attribute] = creditcard[attribute];
    }
    return newObj;
};



console.log(bindCard(new MakePerson('luke', '1/23', 'private'), new MakeCard('bob', 'smith', '16 digits', 'some date', '123')));



