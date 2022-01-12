const names = ["Charlie", "Samip", "Ali"];
const events = "birthday";

function writeCards (names, events) {
    for (let i = 0; i < names.length; i++) {
        console.log (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return names;
}

writeCards(names, events);



let countDown = 10;

while (countDown >= 0){
    console.log (countDown--);
}


/*let countup = 0;
while (countup < 10) {
  console.log(countup++);
}

*/