const express = require('express');
const app = express();
const port = 3111; // Port to listen on

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Define the route to check palindrome
app.get('/checkPalindrome', (req, res) => {
    const input = req.query.text; // Get the 'text' parameter from the query string

    if (!input) {
        return res.status(400).send('Please provide a text query parameter (e.g., ?text=madam).');
    }

    // Check if the input text is a palindrome
    const result = isPalindrome(input);

    // Return the result as a response
    res.send(`
        <h1>Palindrome Checker</h1>
        <p>Input: ${input}</p>
        <p>${input} is ${result ? '' : 'not '}a palindrome.</p>
        <p><a href="/">Go back</a></p>
    `);
});

// Define the home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Palindrome Checker</h1>
        <p>Enter a text to check if it is a palindrome:</p>
        <form action="/checkPalindrome" method="get">
             <input type="text" name="text" placeholder="Enter text" required>
            <button type="submit">Check</button>
        </form>
    `);
});

// Start the server on port 3111
app.listen(port, () => {
    console.log(`Palindrome checker app listening at http://localhost:${port}`);
});
