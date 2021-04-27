// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)


// get a reference to the "click me" button in memory
let clickMeButton = document.querySelector(`.click-me`)

//Event Listener for the "click me" button
clickMeButton.addEventListener(`click`, async function(event) {
  alert(`button was clicked`)
  
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)
  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`

})

//get a reference to the "add movie" link
let addMovieLink = document.querySelector(`.add-movie`)


//event listener for the "add movie" link
clickMeButton.addEventListener(`click`, async function(event) {

  //Prevent link's default behavior (which is to go to google)
  event.preventDefault()
  
  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)

})




//get reference to the "zoom image" button
let zoomImageButton = document.querySelector(`.zoom-image`)


//event lsitener for "zoom image" button
zoomImageButton.addEventListener(`click`, async function(event) {
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  image.classList.add(`border-pink-500`)

  // remove the class of w-96 (in html sets the image to be 96 pixels) and replace with w-full
  image.classList.remove(`w-96`)
  image.classList.add(`w-full`)
})




//get reference to the "change image" button
let changeImageButton = document.querySelector(`.change-image`)

//event lsitener for "change image" button
changeImageButton.addEventListener(`click`, async function(event) {
  // Get a reference to the image
  let image = document.querySelector(`img`)

  //cahnge the image from one grogu pic to another
  image.setAttribute(`src`, `../images/grogu2.jpg`)
})





// Get a reference to the "say hi" button
let sayhiButton = document.querySelector(`.say-hi`)

// Event listener for the "say hi" button
sayhiButton.addEventListener(`click`, async function(event) {
  event.preventDefault()

  //get ref to the input field that holds first name (we are using the id:first-firstname)
  let nameInput = document.querySelector(`#first-name`)

  //get the value from the input field
  let firstName = nameInput.value
  
  //get a ref to the "greet" element
  let greetingElement = document.querySelector(`.greet`)

  //first name shoudl have a value
  if (firstName.length>0) {
    //create a sentence to put in the "greet" element
    let sentence = `Hi, ${firstName}!`

    //set the "greet" element's HTML to the sentence
    greetingElement.innerHTML = sentence
  } else {
    greetingElement.innerHTML = ""
  }
  
})
