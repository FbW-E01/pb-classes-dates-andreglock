const dateObject = new Date();
console.log('1:', dateObject);

const jan2017 = new Date(2017, 0, 1, 1);
console.log('2:', jan2017);

const secondsDifference = (dateObject - jan2017)/1000;
const daysDifference = secondsDifference / (24 * 60 * 60)
console.log(daysDifference.toFixed());

const daysArray = [];
for (let i = 0; i < Math.round(daysDifference); i++) {
    const unix = jan2017.getTime() + i * (1000 * 60 * 60 * 24);
    const stringDate = new Date(unix).toString().slice(4, 15);
    const readyObject = {date: stringDate}
    daysArray.push(readyObject);
}

console.log(daysArray);

for (let i = 0; i < daysArray.length; i++) {
    const coinToss = Math.round(Math.random());
    if (coinToss === 0) {
        daysArray[i].workout = true;
    } else {
        daysArray[i].workout = false;
    } 
}

console.log(daysArray);

let years = 1;
for (let i = 0; i < daysArray.length; i = i + 365) {
    years++;
    if (years % 4 === 0) {
        i++; //Adjust for Jan 29th
    }
    console.log(daysArray[i]);
};

console.log('7:', daysArray[daysArray.length - 8].workout ? 'yes' : 'no');