// DESTRUCTURING
console.log("==== FUNCTION DESTRUCTURING ====")

// Object example
const user = {
    name: "Daniel Githiomi",
    age: 22,
    address: {
        town: "Grand Baie",
        district: "Riviere Du Rempart"
    }
};

// Take a function that prints out the details of the user
function printUser(user) {
    // To print out the full user object to the console
    console.log(user);

    // To print out the specific properties of the user object
    console.log(user.name); // To print the name
    console.log(user.address.district); // To print the user district address

}

// Call the printUser function
printUser(user);


const anotherUser = {
    name: "John Doe",
    age: 27,
    address: {
        town: "Powder Mill Rd",
        district: "Pamplemousses"
    }
};


// But we can do the same thing using deconstruction to get specific properties
function print( {name : personName, address : {district : personAddress} } ){
    
    console.log(personName); // To print the name
    console.log(personAddress); // To print the user district address

}

// Then call the print function and pass in the same user
print(anotherUser);