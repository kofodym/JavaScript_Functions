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
  // return the count into an array of numbers
  return [string_a, string_b, string_d, string_y];
}

// assign the countMe function to a variable to call it, then call it in the terminal
count = countMe(stringLetters);
console.log(count);

console.log(`Count of 'a': ${string_a}`);
console.log(`Count of 'b': ${string_b}`);
console.log(`Count of 'd': ${string_d}`);
console.log(`Count of 'y': ${string_y}`);

//QUESTION 2:
// Given a string of items to be ``rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair"
//use methods to separate the edible and non-edible items from the string.
// Note: your output should be two new strings, one containing edible items and the other non-edible items.

//define the string of items
let stringOfItems =
  "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair";

  // use the split js method to split the items with a comma and add to an array.
let arrayOfItems = stringOfItems.split(",");

// Define a list of edible  and non-edible items
let edible = ["rice", "yam", "beans", "cocoyam", "banana", "semo", "milk"];
let nonEdible = ["table", "tyre", "phone", "watch", "chair"];
 
// Initialize empty arrays for edible and non-edible items this is where we will input the sorted elements
let edibleItems = [];
let nonEdibleItems = [];

// create a function to search through each element of the array and
function sortItems(arrayOfItems) {
  // remove leading/trailing spaces using trim() to ensure accurate matching.
  for (let i = 0; i < arrayOfItems.length; i++) {
    let item = arrayOfItems[i].trim();

    //Use includes() to check if an item from arrayOfItems exists in the edible or nonEdible arrays,
    if (edible.includes(item)) {
      edibleItems.push(item);
    } else if (nonEdible.includes(item)) {
      nonEdibleItems.push(item);
    }
  }

  //convert back to strin of values using the js join() function and then return
  return [edibleItems.join(","), nonEdibleItems.join(",")];
}
