const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
    //avoid calling computation multiple times, store result
    //inside a variable i.e
    //const tip = calcTip(bills[i];
    //tips.push(tip);
    //totals.push(tip + bills[i]);
}


console.log(bills, tips);
console.log(totals);

console.log(calcAverage(bills));

function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

