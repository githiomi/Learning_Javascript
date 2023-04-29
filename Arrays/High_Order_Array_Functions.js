// An array of Person objects
const persons = [
    {
        name: 'John',
        age: 21
    },
    {
        name: 'Daniel',
        age: 19
    },
    {
        name: 'Margaret',
        age: 27
    },
    {
        name: 'Ted',
        age: 22
    },
    {
        name: 'Bob',
        age: 34
    }
];

// NOTE: These methods do not make any changes to the original array object

// Some of the high order array functions in Javascript are:
// 1. map()
// 2. 
// 3. filter()
// 4. some()
// 5. every()
// 6. reduce()

// MAP, FILTER take in ONE PARAMETER (a lambda function)

// FILTER() function
// The filter function is used to filter the elements of the array and place relevant elements into a new array
// NB: Only elements that equate to TRUE are stored in the new array
const filteredPersons = persons.filter(
    (person) => {
        return person.age > 25;
    }
)

console.log(filteredPersons);

// MAP() function
// The map() function is used to make changes to all the elements in the array and store them in a new array