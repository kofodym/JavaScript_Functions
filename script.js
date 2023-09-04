// QUESTION 1:
//You are presented with a string with a collection of data which are mixed alphabets i.e., "abdsgyhidsaadgbdaasbvcydsaabdgsaayre", create a function that will count through the string and show the number of a, b, d and y each contained in the string.
// Note: the output is expected to be a number for each of the counted elements.


//1. Declare String of numbers
let stringLetters = "abdsgyhidsaadgbdaasbvcydsaabdgsaayre";
// Initialize counts for 'a', 'b', 'd', and 'y' to 0
let string_a = 0;
let string_b = 0;
let string_d = 0;
let string_y = 0;
let count;

//declare your function carrying the declared strings as parameters
function countMe(stringLetters) {
//Loop through each character of the string
  for (let i = 0; i < stringLetters.length; i++) {
    // Check if the given  characters are there i.e 'a', 'b', 'd', or 'y'
    //Increment and add to the respective declared counts for each character

    if (stringLetters[i] == "a") {
      string_a++;
    } else if (stringLetters[i] == "b") {
      string_b++;
    } else if (stringLetters[i] == "d") {
      string_d++;
    } else if (stringLetters[i] == "y") {
      string_y++;
    }
  }
 
}