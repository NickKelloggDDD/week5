// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Roll the dice, and keep a running log of roll history by player

// RECIPE (algorithm) – do not modify the HTML!

// Store a reference to the roll button in memory
let rollButton = document.querySelector(`#roll-button`)

// Listen for the clicking of the roll button, when clicked:
rollButton.addEventListener(`click`, async function(event) {
  
  // - Ignore the roll button's default behavior
  event.preventDefault()
  
  // - Store a random integer in memory, representing the roll of the first die
  let die1 = getRandomInt(6)

  // - Store a random integer in memory, representing the roll of the second die
  let die2 = getRandomInt(6)

  // - Store the total of the two random numbers, representing the total roll
  let total = die1 + die2
  
  // - Replace the first die image using the first random value (hint: setAttribute)
  let image1 = document.querySelector(`.die1`)
  let image2 = document.querySelector(`.die2`)
  
  if (die1 == 1) {
    image1.setAttribute(`src`, `../images/dice/1.png`)
  } else if (die1 == 2) {
    image1.setAttribute(`src`, `../images/dice/2.png`)
  } else if (die1 == 3) {
    image1.setAttribute(`src`, `../images/dice/3.png`)
  } else if (die1 == 4) {
    image1.setAttribute(`src`, `../images/dice/4.png`)
  } else if (die1 == 5) {
    image1.setAttribute(`src`, `../images/dice/5.png`)
  } else if (die1 == 6) {
    image1.setAttribute(`src`, `../images/dice/6.png`)
  }
  // - Replace the second die image using the second random value (hint: setAttribute)
  if (die2 == 1) {
    image2.setAttribute(`src`, `../images/dice/1.png`)
  } else if (die2 == 2) {
    image2.setAttribute(`src`, `../images/dice/2.png`)
  } else if (die2 == 3) {
    image2.setAttribute(`src`, `../images/dice/3.png`)
  } else if (die2 == 4) {
    image2.setAttribute(`src`, `../images/dice/4.png`)
  } else if (die2 == 5) {
    image2.setAttribute(`src`, `../images/dice/5.png`)
  } else if (die2 == 6) {
    image2.setAttribute(`src`, `../images/dice/6.png`)
  }
  // - Store a reference to the player name input element
    
  let nameInput = document.querySelector(`#player`)

  // - Grab the value of the player name element and store the player's name in memory
  let name = nameInput.value
  
  // - Make sure the player's name is filled out; if it is:
    // - Form a sentence in memory, containing the player's name and the total that was rolled
    // - Store a reference to the "result" un-ordered list element
    // - Insert the sentence to the "result" un-ordered list as a list item (li)

  if(name.length>0) {
   
    let sentence = `${name} rolled a ${total}`
   
   let resultElement = document.querySelector(`.result`)

   //resultElement.innerHTML = sentence
   resultElement.setAttribute(`beforeend`, `<li>${sentence}</li>`)
  }
  //resultList.insertAdjacentHTML(`beforeend`, `<li>${sentence}</li>`)
})