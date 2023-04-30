console.log("==== ASYNC PROMISES FUNCTIONS ====");

// Asyncronous JS
// These are functions that take time to execute
// They are therefore run on the background to ensure that the normal rendering of JS is not interrupted

// PROMISES
// These are

// NB: We can access notes from the Callback.js file

// When using promises, we need to remember that promises:
// 1. Takes in a CALLBACK
// This callback then has 2 parameters
// 1. resolve - called on success of a condition
// 2. reject - called on failure of a condition

// Syntax:
/*
 new Promise(
    () => {}
);
*/
let p = new Promise( // Creating a new Promise
    (
        // The callback that takes in the 2 parameters
        resolve, reject
    ) => {
        // Function body goes here
    }
);


// So if we had a function to create a new post
function createNewPost(newPost) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            posts.push(newPost);

            // Condition to determine if the promise resolves or rejects
            let condition = false;

            if (!condition) {
                // Here the promise resolves
                resolve("All Good. Sucessful promise resolved");
            } else {
                // Here the promise rejects
                reject("Error! Something went wrong!");
            }

        }, 2000);

    })

}

// We can then call the function
// NB:
// When the resolve function is called on success, then the promise executes the .THEN() method
// When the reject function is called of failure, then the promise executes the .CATCH() method
createNewPost(
    { title: "New Promise Post", content: 'A new post from promise' }
).then(
    success => {
        // This is called when the promise resolves/succeeds
        getPosts;
        console.log(success);
    }
).catch(
    // This is called when the promise rejects/fails
    // It takes in an error message
    err => {
        console.log(err);
    }
)

// PROMISE.ALL()
// This is called/used when there are multiple promises to be executed
// It takes in an ARRAY of promises
// This method will last as long as the SLOWEST promise takes to be executed
// This method waits for ALL promises to be executed then it resolves/rejects
const promise1 = Promise.resolve("First promise resolved");
const promise2 = 10;
const promise3 = new Promise(
    (resolve, reject) => {
        setTimeout(resolve, 2000, 'Goodbye from promise 3')
    });

Promise.all([promise1, promise2, promise3])
    .then(
        values => {
            // These values are the RESOLVE outputs/results of all promises passed into the method
            console.log(values);
        }
    );

// PROMISE.RACE()
// Similar to the promise.all() method, it takes in an array of promises
// However, it returns ONLY ONE resolve value of the list of promises
// It returns the first promise that completes to execute
Promise.race(
    [promise1, promise2, promise3]
).then(
    value => {
        console.log(value)
    }
);