// DESTRUCTURING
console.log("==== OBJECT DESTRUCTURING ====")
// This refers to act of 'breaking down' an object and convert it into smaller elements/variables

const personOne = {
    name: "Daniel Githiomi",
    age: 22,
    address: {
        town: "Grand Baie",
        district: "Riviere Du Rempart"
    }
};

const personTwo = {
    name: "John Doe",
    age: 27,
    address: {
        town: "Powder Mill Rd",
        district: "Pamplemousses"
    }
};

// We can convernsionally get the person properties using the normal method
let p1Name = personOne.name;
let p1Age = personOne.age;
console.log(`${p1Name} is ${p1Age} years old`);

// However, when using deconstruction:
const{ name, age } = personTwo; // This will get the name and age properties of the personTwo object
// Then it can be printed to the console
console.log(`${name} is ${age} years old`);

// We can also give aliases to the deconstructed properties 
// Then use them in the code
const { name : fullName, age: currentAge, favouriteFood: food = "Chicken" } = personOne; // Each property can also be given a default value
// Then it can be printed to the console
console.log(`${fullName} is ${currentAge} years old and likes to eat ${food}`);

// We can also remove properties from the object and then gropu the rest of the properties
const { name:personName, ...restOfPerson } = personTwo;
console.log(personName);
console.log(restOfPerson);

// Deconstructing an object inside another object
// To deconstruct the town name from the person's address
const { name:pName, address: { town : townName } } = personOne;
console.log(`${pName} lives in ${townName}`);

const personThree = {
    name: "Dhosio Hoes",
    age: 29,
    address: {
        town: "Grand Baie",
        district: "Riviere Du Rempart"
    }
};

const personFour = {
    address: {
        town: "Powder Mill Rd",
        district: "Pamplemousses"
    }
};

// We can combine two different objects
// NB: The following properties will override the preceding object's properities
const personFive = {...personThree, ...personFour};
// This means take everything in P3 and put it into P5. Also add everything from P4 into the same P5 and override any conflicting properties
console.log(personFive);