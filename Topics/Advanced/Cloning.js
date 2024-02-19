console.log("==== CLONING OBJECTS ====");

// Cloning is the art of creating an mirror object that is exactly the same as the original
// We cannot clone using simple '='. This will just be referencing the varaible location

// IE: this is NOT cloning
const obj = {
    a : 1,
    b : 2,
    c : 3
}
const clone = obj; // 'clone' will just be referencing the 'obj' variable

// To do clone it without mutating the original, we can either use:
// 1. Spread operator

const spreadOperatorClone = {...obj, d : 4} // you can also add more properties to the object without changing the original
console.log("Original: ", obj);
console.log("Spread cloned: ", spreadOperatorClone);

// 2. Object.assign 
const assignOperatorClone = Object.assign({}, obj);  // Object.assign( target : {}, source ) -> target is the start of the object being created, & source is the object being cloned
assignOperatorClone.e = 5;
console.log("Assign cloned: ", assignOperatorClone);