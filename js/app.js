// Expanded lists of possible criteria
const beginsWith = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  
  const constraints = [
    "Exactly one syllable",
    "Exactly two syllables",
    "Exactly three syllables",
    "Has an even number of letters",
    "Has an odd number of letters",
    "Has exactly 5 letters",
    "Has exactly 6 letters",
    "Has exactly 7 letters",
    "Has exactly 8 letters",
    "Has more than 8 letters",
    "Has fewer than 5 letters",
    "Contains no vowels",
    "Contains double letters (e.g., 'tt')",
    "Is a palindrome (reads the same backward)",
    "Rhymes with a common word"
  ];
  
  const themes = [
    "Animals",
    "Countries",
    "Foods",
    "Movies",
    "TV shows",
    "Famous people",
    "Cities",
    "Sports",
    "Musical instruments",
    "Books",
    "Brands",
    "Historical events",
    "Scientific terms",
    "Plants",
    "Occupations",
    "Video games",
    "Mythological creatures",
    "Holidays",
    "Colors",
    "Body parts"
  ];
  
  // DOM Elements
  const letterElement = document.getElementById("letter");
  const constraintElement = document.getElementById("constraint");
  const themeElement = document.getElementById("theme");
  const nextRoundBtn = document.getElementById("nextRoundBtn");
  
  // Function to generate a random challenge
  function generateChallenge() {
    const randomLetter = beginsWith[Math.floor(Math.random() * beginsWith.length)];
    const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  
    letterElement.textContent = randomLetter;
    constraintElement.textContent = randomConstraint;
    themeElement.textContent = randomTheme;
  }
  
  // Event listener for the "Next Challenge" button
  nextRoundBtn.addEventListener("click", generateChallenge);
  
  // Initialize the first challenge
  generateChallenge();

  // Play Sound When Clicking Button

const Button_Sound = new Audio('click.mp3'); // Create an Audio object

// Function to play the sound
function playButton_Sound() {
  Button_Sound.play();
}

// Add event listeners to buttons
document.getElementById('nextRoundBtn').addEventListener('click', playButton_Sound);
