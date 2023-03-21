// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

/************************/
/* For Loops and Arrays */
/************************/

// The following exercises will use the numbers array below

let numbers = [22, 15, 10, 19, 36, 2, 5, 20];

// ----------------------------------------------------------------------------------------------
console.log("Exercise One"); // Do not modify the lines like this before each exercise, these are to make the console output more readable :)
// - Create a for loop
// - Have your loop iterate through every number in the numbers array, printing each number to the console.
//
// Write your code here 👇

function kata1() {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
kata1();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// - Create another for loop
// - Have your loop iterate through every number in the numbers array, printing out numbers LESS THAN (but not including) 20.
//
// Write your code here 👇

function kata2() {
    let underTwenty = [];
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i]
        if (currentNumber < 20) {
            underTwenty.push(currentNumber);
        }
    }
    console.log(underTwenty);
}
kata2();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// - Using a loop, multiply every number in the numbers array together.
// - Print the result to the console.
//   Hint: This should output 451440000
//   Hint 2: Remember that 0 times anything is 0, so your result variable should not start at zero :) 
//
// Write your code here 👇

function kata3() {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    console.log(result);
}
kata3();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// - Using a loop, find the largest number in the numbers array.
// - Print it to the console.
//   Hint: The largest number is 36, so that's what your code should output. 
//   (But don't hardcode that; find it with a loop...)
//
// Write your code here 👇

function kata4() {

}
kata4();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Five");
// - Using a loop, filter out every number smaller than 10 from the numbers array.
//   This should produce a new array, putting numbers larger than or equal to 10 into this new array.
// - Print your new array to the console.
//
// Write your code here 👇

function kata5() {

}
kata5();

// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any extraneous console.log()
// statements from your code.
