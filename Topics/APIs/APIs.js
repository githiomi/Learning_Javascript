console.log("==== API CALLS ====");

// Dummy URL
const baseUrl = "https://jsonplaceholder.typicode.com/users";

// API - Application Programming Interface
// This is a file to show the mulitple ways that JS can be used to make API calls
// All API calls return promises which can then be accessed using the following methods:    
    // 1. Promises
    // 2. Async await

// The different ways of making API calls are:
// 1. 
// 2. Fetch API
// 3. Axios
    // Requires a third party library
    // 
// 4. JQuery Ajax
    // Requires a third party library
    // 


// URLS
// Before making API calls, we first need the URL
// This can be a simple string but we can also use the URL object
// This allows us to build the URL and add headers to it
const endpointUrl = new URL("https://jsonplaceholder.typicode.com/users");
// The URL onbject allows us to easily add query parameters
// In the case where we need to pass an API key, we can do so as follows:
endpointUrl.searchParams.set(
    "token",
    "API_KEY_GOES_HERE"
);
// The final URL can then be used to make API calls
console.log(endpointUrl);


// 1. XMLHTTP REQUEST
// This is an inbuilt request that can be used directly without the need for any imports
const xmlRequest = new XMLHttpRequest();
/* Syntax: 
    <request-name>.open(
    "GET", // The call type being made
    baseUrl // The url used to make the request

    Then:
    <request-name>.send();
)
*/
xmlRequest.open("GET", baseUrl);
xmlRequest.send();

// We then handle the request response
xmlRequest.onload = () => {

    // Check if the request was successful
    if (xmlRequest.status === 200){
        console.log(xmlRequest.response);

        // The data returned is always in text format.
        // To convert it to JSON
        jsonResponse = JSON.parse(xmlRequest.response);
        console.log(jsonResponse);
    }else {
        // If the request was unsuccessful
        console.log("Error: " + xmlRequest.status)
    }

}

// 2. FETCH
// Fetch is inbuilt into the Window.document therefore needs no external 3rd party library
// Fetch returns a promise thus can be used using PROMISES or ASYNC-AWAIT
// Syntax
    // fetch (url)
fetch(baseUrl)
    .then( response => {
        // The first then() returns an object response that is not usefull
        console.log(response);
        // To get useful information, we then need to convert the response into JSON data
        response.json(); // This returns another promise that is caught in the second .THEN()
    })
    .then( data => {
        // The second .then() can then return ACTUAL DATA that can then be used to build the code base
        console.log(data);
    });

// We can also use fetch using ASYNC-AWAIT
async function getUsers() {

    // This also return the unusable response object
    const response = await fetch(baseUrl);

    // If the API provider required additional parameters
    const authenticatedResponse = await fetch(baseUrl, {
        headers: {
            // IF we wanted to change the method
            method: "POST",
            // Content return type
            'Content-Type': 'application/json',
            // Change the content to JSON
            body: JSON.stringify("<Content to post>"),
            // For example if it needed authentication
            'Authentication': "YOUR_API_TOKEN"
        }
    })

    // But we can get the data from the response object
    const data = await response.json();

    console.log(data);
}

// Call the async function to get the users from the API
getUsers()


// AXIOS
// This is a third-party library used to make API calls
