/*jshint esversion: 6 */

// We need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background color of the body

const bodyTag = document.querySelector("body");
const h1Tag = document.querySelector("h1");

h1Tag.addEventListener("click", function() {
  // something happens when h1 is clicked
  // bodyTag.innerHTML = "h1 has been clicked!";
  bodyTag.style.fontSize = "50px";
  bodyTag.style.backgroundColor = "green";
});

// bodyTag.style.backgroundColor = "green";
// bodyTag.innerHTML = "Hi I'm Javascript! Your site is now ruined! hehe!";