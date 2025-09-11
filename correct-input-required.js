let word;

do {
  word = prompt("Enter a word (at least 5 characters)");
} while (!word || word.length < 5);

console.log("You entered:", word);
