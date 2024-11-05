'use strict';

// Dom - The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like hierarchy, with each node in the tree representing a different aspect of the document, such as an element, an attribute, or text. The DOM allows developers to programmatically access and manipulate the content, structure, and style of a document


// DOM is not a part of javascript but it is programming interface for html
// check dom1.jpg

// JavaScript can be used to access and manipulate the DOM, but other programming languages can also be used, such as Python, Java, C#, etc.
// The DOM provides a way for a program to access and update the content, structure, and style of a document, and JavaScript is often used to interact with the DOM in web development.

// DOM is a part of WEB apis in browser
/*
there also some other webapis also there:--
DOM (Document Object Model) API: Allows JavaScript to access and manipulate the content, structure and style of a web page.
Geolocation API: Allows web applications to access the user's location information.
Web Storage API: Allows web applications to store and retrieve data on the client side, such as local storage and session storage.
Web Workers API: Allows web applications to run scripts in the background, separate from the main page, improving performance.
WebSocket API: Enables real-time communication between a client and a server.
WebRTC API: Enables peer-to-peer communication between browsers.
Web Audio API: Allows web developers to process and manipulate audio on the web.
Media Capture and Streams API: Allows web developers to access the user's camera and microphone.
*/




/*
console.log(document.querySelector('.message').textContent); //text is selected
document.querySelector('.message').textContent = "Correct number 🧑‍💻"  //we can manipulate the selected text.

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;
document.querySelector('.guess').value = 44; //here for the input field we use value to set the value

*/

//HANDLING CLICK EVENTS -----event listening

//note: when we get something from user interface or input field then it usually a string.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess); //output : String
    console.log(guess, typeof guess); //now output will be : Number
    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = "🚫 Please Enter Valid Number !!"
        displayMessage('🚫 Please Enter Valid Number !!');
        //when player wins 
    } else if (guess === secretNumber) {
        displayMessage('🎉Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        //changing css with js
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});







/*
Refactoring code refers to the process of making changes to the structure of existing code without changing its external behavior. The goal of refactoring is to improve the maintainability, readability, and performance of the code. This can be done by:

Removing duplicate code
Simplifying complex logic
Splitting large functions into smaller ones
Renaming variables, classes, and methods to make them more meaningful
Extracting common functionality into reusable functions or classes
Replacing complex data structures with simpler ones
Updating the code to use modern syntax or best practices
*/