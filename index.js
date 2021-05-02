// Your code goes here
// index.js: Should change the text on the page when the DOM content has loaded
    document.addEventListener("DOMContentLoaded", function() {
        updateDOM()
    });

    function updateDOM() {
        document.getElementById("text").innerHTML = "This is really cool!";
    }

// The text node hold the text "JavaScript is so cool. It lets me add text to my page programmatically"