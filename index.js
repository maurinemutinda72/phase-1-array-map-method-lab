// Provided tutorials array
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to title case each tutorial
function titleCased() {
  return tutorials.map((tutorial) => {
    // Split the tutorial into individual words
    const words = tutorial.split(" ");
    // Capitalize the first letter of each word and join them back into a sentence
    const titleCasedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return titleCasedWords.join(" ");
  });
}

// Testing the function
console.log(titleCased());
/*
Output:
[
  "What Does The This Keyword Mean?",
  "What Is The Constructor Oo Pattern?",
  "Implementing Blockchain Web Api",
  "The Test Driven Development Workflow",
  "What Is Nan And How Can We Check For It",
  "What Is The Difference Between Stoppropagation And Preventdefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is Jsonp?"
]
*/
