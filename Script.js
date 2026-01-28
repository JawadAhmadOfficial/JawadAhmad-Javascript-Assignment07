
//============================Taske.NO: 01======================================

// Step 1: For Loop - Teacher printing roll numbers 1 to 5

for(let i = 1; i <= 5; i++){ // i starts from 1, runs until 5, increases by 1
    console.log("Roll Number:", i); // print the current roll number
}



//===========================Taske.NO: 02======================================

// Step 2: While Loop - Shop selling items from 1 to 3
let item = 1; // start with item 1
let stock = 3; // total items in stock

while(item <= stock){ // loop runs while item number is <= stock
    console.log("Item Number:", item); // print current item number
    item++; // increase item number by 1
}


//===========================Taske.NO: 03======================================


// Step 3: Do-While Loop - Ask user to enter correct PIN at least once
let correctPIN = "1234"; // correct PIN
let userPIN;

do {
    userPIN = prompt("Enter your PIN:"); // ask user to enter PIN
} while(userPIN !== correctPIN); // keep asking until correct PIN

alert("PIN correct! Access granted."); // success message



//===========================Taske.NO: 04====================================
// Step 4: Loop with user input
let times = prompt("How many times do you want to print Hello?");

// Convert user input to number
times = Number(times);

for(let i = 1; i <= times; i++){ // loop from 1 to times
    console.log("Hello"); // print Hello in console
}



