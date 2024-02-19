console.log("==== CLOSURES ====");

// Closures are JS functions that can be used to expose private properties/variables created 
// within the function. These properties can not be accessed in any other way

// Q: Create a function that stores a secret which cannot be accessed/changed from outside
// A: This is a CLOSURE question

const closure = () => {

    let secret = "This is a secret string!"

    return () => secret;

}

const closureFn = closure()
console.log(closureFn());