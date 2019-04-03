/*jshint esversion: 6 */

// We need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background color of the body

// Step 1: Decide which tags in HTML we want to use & save them as constants at the top of the page

const bodyTag = document.querySelector("body");



// Step 2: Decide which user evenets ie, click, scroll, etc, we want to trigger out code on. Here we want to listen out for any scroll events on our page

document.addEventListener("scroll", function() {

  // Does something when the page is scrolled

  console.log("Scrolling Page");

  //  Step 3: Find out & store how far from the top of the page the scrollbar is
  // Use window when referring to the scrollbar as it is on the browser frame/window

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // If the distanceFromTop is greater than 1000px do something

  if (distanceFromTop > 1000) {
    // Do this
    // bodyTag.style.backgroundColor = "red";

    console.log("More thant 1000 pixels");
    bodyTag.classList.add("brogue-active");

  } else {
    // do something else
    // bodyTag.style.backgroundColor = "#f5f5f5";
    // console.log("Less than 1000 pixels");

    bodyTag.classList.remove("brogue-active");
  }

  if (distanceFromTop > 4000) {
    // Do this
    // bodyTag.style.backgroundColor = "red";
    bodyTag.classList.add("stationary-active");

  } else {
    // do something else
    // bodyTag.style.backgroundColor = "#f5f5f5";
    // console.log("Less than 1000 pixels");

    bodyTag.classList.remove("stationary-active");
  }

  if (distanceFromTop > 6100) {
    // Do this
    // bodyTag.style.backgroundColor = "red";
    bodyTag.classList.add("services-active");

  } else {
    // do something else
    // bodyTag.style.backgroundColor = "#f5f5f5";
    // console.log("Less than 1000 pixels");

    bodyTag.classList.remove("services-active");
  }

});


// lightbox
// when we click an image, we want to show the lightbox
// inside lightbox we want to show the image that we clicked on
// when we click on the lightbox we want it to disappear

// Step 1: Decide which tags in HTML we want to use and save them in constants

// Save all of our images into a constant - this will be a list of images


const images = document.querySelectorAll("section img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

// let's look at what's saved in images

console.log(images);

// our images constant contains a list  of images. we will add an EventListenerto all of them. to do this we need to add a loop. in javascript this is called a forEach function. it loops through all of our images applying the same code.

images.forEach(image => {

  // Step 2: Add a click event listener to all our images
  image.addEventListener("click", function() {
    console.log("image clicked");
    // step 3: show the lightbox
    lightbox.classList.add("fadeIn");
    // step 4: show the right image
    // Save the image src attribute from the image we click on
    // the keyword "this" references the image we have clicked on - THIS image. .getAttribute allows us to store an attribute. we want the src attribute because it contains the image location.
    let imageSRC = this.getAttribute("src");
    console.log(imageSRC);
    // Save the lightbox image src attribute to the one we save
    lightboxImage.setAttribute("src", imageSRC);
  });

});

// step 4: when we click on the lightbox, remove the fadeIn class

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");

});