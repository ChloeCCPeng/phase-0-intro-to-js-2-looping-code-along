let names = [];
let event;

function writeCards (names, event) {
    let message =[];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countDown(){
    let countDown = 10;
    while (countDown >= 0) {
  console.log(countDown--);
}
return countDown;
}











// const names = ["Charlie", "Samip", "Ali"];
// const events = "birthday";

// function writeCards (names, events) {
//     for (let i = 0; i < names.length; i++) {
//         console.log (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
//     }
//     return names;
// }

// writeCards(names, events);



// let countDown = 10;

// while (countDown >= 0){
//     console.log (countDown--);
// }
