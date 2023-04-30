console.log("==== ASYNC CALLBACK FUNCTIONS ====");

// Asyncronous JS
// These are functions that take time to execute
// They are therefore run on the background to ensure that the normal rendering of JS is not interrupted

// CALLBACK functions
// These are

const posts = [
    {
        title: 'Post One',
        content: 'This is post one'
    },
    {
        title: 'Post Two',
        content: 'This is post two'
    }
];

// DOM manipulation
let output = document.getElementById('output');

// To mimick a simple DB call delay, we can use a timeout
function getPosts() {
    setTimeout(() => {

        let outputPosts = '';

        // This is where we can get the posts
        posts.forEach(
            post => {
                // Add it to the output 
                outputPosts += `<li>${post.title} -> ${post.content}</li>`
                output.innerHTML = outputPosts;
                output.style.color = 'black';
            }
        )

    }, 1000 // This timeout will take a total of 3 seconds
    );
}

getPosts();

// To create a new post to add to the list
function createPost(newPost) {

    setTimeout(
        () => {

            // To add th new post to the existing list
            posts.push(newPost)

        },
        2000);

};

createPost({
    // This is deconstruction to pass in a new post object into the function
    title: 'Post Three',
    content: 'This is post three'
});

// The working of a callback is as follows:
// 1. The async function takes in a function parameter (the CALLBACK) and it will be called/executed when a criteria is matched
function callbackCreatePost(
    // This function takes in 2 parameters
    // 1. The deconstructed new post object
    // 2. The callback function to be executed
    newPost, callback) {

    setTimeout(() => {
        posts.push(newPost);
        callback(); // Here the passed in callback function is called
    }, 2000);
}

// When calling a function that takes in a function parameter as the callback function
// We pass in a function parameter
callbackCreatePost(
    {  title: 'Post Five', content: 'This is post five'},
    getPosts // The function that will be the callback function. passed with no brackets
)