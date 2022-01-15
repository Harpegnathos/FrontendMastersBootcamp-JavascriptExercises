const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const firstName = "Josh";
const lastName = "Green";

const sentence = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);6

const isSkyBlue = false;

let greeting;

console.log(isSkyBlue);

if (isSkyBlue) {
    console.log("The sky is blue!");
    console.log("lol");
    greeting = 'It must be nice weather';
} else {
    console.log("The sky is ... not blue?");
    greeting = 'It must be bad weather';
}

console.log(greeting);

// const num = 5;

// console.log(num);

// = is asigned
// == same as triple but don't use
// === if this is true

if (2 + 2 === 4) {
    console.log("Yay, math still works.");
} else {
    console.log("Oh No!");
}

// ELSE IF
// it will keep going down looking for the first thing that's true. once it finds something true it will skip the rest

// let friendsAtYourParty = 5;

// if (friendsAtYourParty === 0) {
//     console.log("Cool, now I have all the nachos to myself");
// } else if (friendsAtYourParty <= 4) {
//     console.log("perfect amount to play Mario Kart");
// } else {
//     console.log("Woooooooooo, let's party");
// }



// LOOPS
// let friendsAtYourParty = 0;

// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;

// //until the while statement is true, keep running it
// while (friendsAtYourParty < 10) {
//     //all of these are the same, incrimenting the value by 1 each time
//     friendsAtYourParty += 1;
//     friendsAtYourParty++;
//     ++friendsAtYourParty;
//     friendsAtYourParty = friendsAtYourParty + 1;
//     console.log(friendsAtYourParty);
// }

// console.log(friendsAtYourParty);

let friendsAtYourParty = 0;

for (let i = 0; i < 10; i++) {
    console.log(i);
    friendsAtYourParty++;
}
console.log(friendsAtYourParty);
